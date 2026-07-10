import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Tracks which page section is in view so the nav can mark it current.
 * The root margins put the "reading line" in the upper third of the viewport.
 */
export function useScrollSpy(sectionIds: readonly string[]) {
  const activeId = ref(sectionIds[0] ?? '')
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            activeId.value = entry.target.id
        }
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el)
        observer.observe(el)
    }
  })

  onUnmounted(() => observer?.disconnect())

  return { activeId }
}
