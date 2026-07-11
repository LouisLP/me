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
      class="cell"
      :style="{ zIndex: photos.length - index }"
    >
      <div class="print">
        <span class="frame">
          <img v-if="photo.src" :src="photo.src" :alt="photo.alt" loading="lazy">
          <IconImage v-else class="placeholder-icon" aria-hidden="true" />
        </span>
        <span class="caption">{{ photo.caption }}</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
/* Prints laid on a table. No scrolling: the cells shrink as the viewport
   narrows while each print keeps its size, so the pile squishes together
   and the overlap deepens. */
.strip {
  display: flex;
  padding: var(--space-md) var(--space-md) var(--space-sm);
  list-style: none;
}

.cell {
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  /* Caps how far apart prints can drift on wide screens: a slight overlap */
  max-width: 8rem;
}

/* The last print needs its full width so the pile stays inside the strip */
.cell:last-child {
  flex: 0 0 auto;
}

.cell:hover {
  z-index: 10 !important;
}

.print {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
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

/* Alternate baselines slightly, like prints laid down by hand */
.cell:nth-child(even) .print {
  margin-top: var(--space-sm);
}

.cell:nth-child(5n + 1) .print {
  rotate: -3deg;
}

.cell:nth-child(5n + 2) .print {
  rotate: 2deg;
}

.cell:nth-child(5n + 3) .print {
  rotate: -1.5deg;
}

.cell:nth-child(5n + 4) .print {
  rotate: 2.5deg;
}

.cell:nth-child(5n) .print {
  rotate: -2deg;
}

/* A print straightens and lifts above its neighbors when picked up */
.print:hover {
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
