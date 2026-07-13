import { computed, onMounted, onUnmounted, ref } from 'vue'

const MAX_TILT_DEG = 3

/**
 * Pointer-tracking tilt for the business card. Tracks the pointer across the
 * whole viewport (not just the card) so the card reacts before the pointer
 * ever reaches it. Deliberately gentle: the card should feel picked up, not
 * thrown around. Inert for touch pointers and under prefers-reduced-motion.
 */
export function useCardTilt() {
  const tiltX = ref(0)
  const tiltY = ref(0)

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const finePointer = window.matchMedia('(pointer: fine)')

  function onPointerMove(event: PointerEvent) {
    if (reducedMotion.matches || !finePointer.matches)
      return
    const x = event.clientX / window.innerWidth - 0.5
    const y = event.clientY / window.innerHeight - 0.5
    tiltX.value = -y * MAX_TILT_DEG * 2
    tiltY.value = x * MAX_TILT_DEG * 2
  }

  function resetTilt() {
    tiltX.value = 0
    tiltY.value = 0
  }

  onMounted(() => {
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('blur', resetTilt)
  })

  onUnmounted(() => {
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('blur', resetTilt)
  })

  const transform = computed(
    () => `perspective(800px) rotateX(${tiltX.value.toFixed(2)}deg) rotateY(${tiltY.value.toFixed(2)}deg)`,
  )

  return { transform }
}
