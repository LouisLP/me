import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Fades a value from 1 to 0 as the given section scrolls past the top of
 * the viewport, so a hint tied to the section (e.g. a scroll cue) doesn't
 * linger once the user has moved on.
 */
export function useHeroScrollFade(sectionRef: Ref<HTMLElement | null>) {
  const opacity = ref(1)
  let ticking = false

  function update() {
    ticking = false
    const el = sectionRef.value
    if (!el)
      return
    const { bottom, height } = el.getBoundingClientRect()
    opacity.value = Math.min(1, Math.max(0, bottom / height))
  }

  function onScroll() {
    if (ticking)
      return
    ticking = true
    requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return { opacity }
}
