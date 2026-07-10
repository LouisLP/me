<script setup lang="ts">
import type { BioPhoto } from '@/content/photos'
import IconImage from '~icons/lucide/image'

defineProps<{
  photos: BioPhoto[]
}>()
</script>

<template>
  <ul class="strip">
    <li
      v-for="(photo, index) in photos"
      :key="photo.caption"
      class="print"
      :style="{ zIndex: photos.length - index }"
    >
      <span class="frame">
        <img v-if="photo.src" :src="photo.src" :alt="photo.alt" loading="lazy">
        <IconImage v-else class="placeholder-icon" aria-hidden="true" />
      </span>
      <span class="caption">{{ photo.caption }}</span>
    </li>
  </ul>
</template>

<style scoped>
/* Prints laid on a table: overlapping, each at its own slight angle */
.strip {
  display: flex;
  padding: var(--space-md) var(--space-md) var(--space-sm);
  list-style: none;
  overflow-x: auto;
}

.print {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  flex-shrink: 0;
  width: 8.5rem;
  padding: var(--space-xs) var(--space-xs) var(--space-sm);
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-surface-raised);
  box-shadow: var(--shadow-md);
  transition:
    rotate var(--duration-normal) var(--ease-out),
    translate var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.print + .print {
  margin-left: calc(-1 * var(--space-xs));
}

/* Alternate baselines slightly, like prints laid down by hand */
.print:nth-child(even) {
  margin-top: var(--space-sm);
}

.print:nth-child(5n + 1) {
  rotate: -3deg;
}
.print:nth-child(5n + 2) {
  rotate: 2deg;
}
.print:nth-child(5n + 3) {
  rotate: -1.5deg;
}
.print:nth-child(5n + 4) {
  rotate: 2.5deg;
}
.print:nth-child(5n) {
  rotate: -2deg;
}

/* A print straightens and lifts above its neighbors when picked up */
.print:hover {
  z-index: 10 !important;
  box-shadow: var(--shadow-lg);
  rotate: 0deg;
  translate: 0 -4px;
}

@media (prefers-reduced-motion: reduce) {
  .print:hover {
    translate: none;
  }
}

.frame {
  display: grid;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-canvas);
  place-items: center;
}

.frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-icon {
  width: var(--space-lg);
  height: var(--space-lg);
  color: var(--color-text-muted);
}

.caption {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
  text-align: center;
}
</style>
