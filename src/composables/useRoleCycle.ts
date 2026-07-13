import { onMounted, onUnmounted, ref } from 'vue'

const DISPLAY_MS = 2400

/**
 * Cycles through a list of roles on an interval. Under prefers-reduced-motion
 * the cycling still happens (the roles are all true), it's just left to the
 * caller to skip the crossfade animation.
 */
export function useRoleCycle(roles: readonly string[]) {
  const index = ref(0)
  let timer: ReturnType<typeof setInterval> | undefined

  onMounted(() => {
    if (roles.length <= 1)
      return
    timer = setInterval(() => {
      index.value = (index.value + 1) % roles.length
    }, DISPLAY_MS)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })

  return { index }
}
