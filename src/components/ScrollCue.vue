<script setup lang="ts">
import IconChevronDown from '~icons/lucide/chevron-down'

defineProps<{
  opacity: number
}>()
</script>

<template>
  <a href="#about" class="scroll-cue" aria-label="Scroll to About section" :style="{ opacity }">
    <IconChevronDown aria-hidden="true" />
  </a>
</template>

<style scoped>
.scroll-cue {
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  translate: -50% 0;
  color: var(--color-text-muted);
  font-size: var(--font-size-xl);
  line-height: 0;
  transition:
    color var(--duration-fast) var(--ease-out),
    opacity var(--duration-fast) var(--ease-out);
  animation: drift var(--duration-ambient) var(--ease-in-out) infinite;
}

.scroll-cue:hover,
.scroll-cue:focus-visible {
  color: var(--color-text-secondary);
}

@keyframes drift {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.25em);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue {
    animation: none;
  }
}
</style>
