<script setup lang="ts">
import type { ProjectPreview } from '@/content/projects'

defineProps<{
  variant: ProjectPreview
}>()
</script>

<template>
  <!-- Example design drawn with the semantic tokens; decorative -->
  <div class="vignette" aria-hidden="true">
    <div v-if="variant === 'tokens'" class="vignette-tokens">
      <div class="swatch-row">
        <span class="swatch is-canvas">canvas</span>
        <span class="swatch is-surface">surface</span>
        <span class="swatch is-raised">raised</span>
      </div>
      <div class="swatch-row">
        <span class="swatch is-accent">accent</span>
        <span class="swatch is-secondary">secondary</span>
        <span class="swatch is-success">success</span>
      </div>
    </div>

    <div v-else-if="variant === 'scrubber'" class="vignette-scrubber">
      <span class="timecode">00:00:12:04</span>
      <div class="track">
        <span class="clip" />
        <span class="playhead" />
      </div>
      <div class="ticks">
        <span v-for="tick in 9" :key="tick" class="tick" />
      </div>
    </div>

    <svg
      v-else-if="variant === 'easing'"
      class="vignette-easing"
      viewBox="0 0 200 120"
    >
      <line x1="30" y1="100" x2="170" y2="100" class="axis" />
      <line x1="30" y1="100" x2="30" y2="20" class="axis" />
      <line x1="30" y1="100" x2="58" y2="30" class="handle is-kaki" />
      <line x1="170" y1="20" x2="120" y2="20" class="handle" />
      <circle cx="58" cy="30" r="4" class="handle-dot is-kaki" />
      <circle cx="120" cy="20" r="4" class="handle-dot" />
      <path d="M 30 100 C 58 30, 120 20, 170 20" class="curve" />
    </svg>

    <div v-else-if="variant === 'library'" class="vignette-library">
      <div class="variant-row">
        <span class="ui-button is-solid">Button</span>
        <span class="ui-button is-outline">Button</span>
        <span class="ui-button is-ghost">Button</span>
      </div>
      <span class="variant-caption">button · solid / outline / ghost</span>
    </div>

    <div v-else class="vignette-market">
      <div class="dataset-card">
        <svg class="trace" viewBox="0 0 96 28">
          <path d="M 4 22 C 22 22, 26 6, 48 6 S 76 22, 92 22" class="trace-path is-accent" />
        </svg>
        <span class="dataset-name">pick-and-place</span>
        <span class="dataset-price">€49</span>
      </div>
      <div class="dataset-card">
        <svg class="trace" viewBox="0 0 96 28">
          <path d="M 4 20 L 24 20 L 32 8 L 52 8 L 60 20 L 80 20 L 92 10" class="trace-path" />
        </svg>
        <span class="dataset-name">bin-sorting</span>
        <span class="dataset-price">€79</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vignette {
  display: grid;
  width: 100%;
  place-items: center;
}

/* Kabuki: the token roles as labeled chips */
.vignette-tokens {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.swatch-row {
  display: flex;
  gap: var(--space-sm);
}

.swatch {
  display: grid;
  width: 5.5rem;
  height: 3rem;
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-sm);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
  place-items: center;
}

.is-canvas {
  background-color: var(--color-bg-canvas);
}

.is-surface {
  background-color: var(--color-bg-surface);
}

.is-raised {
  background-color: var(--color-bg-surface-raised);
}

.is-accent {
  border-color: transparent;
  background-color: var(--color-accent-default);
  color: var(--color-text-on-accent);
}

.is-secondary {
  border-color: transparent;
  background-color: var(--color-secondary-default);
  color: var(--color-text-on-accent);
}

.is-success {
  background-color: var(--color-success-subtle-bg);
  color: var(--color-success-subtle-fg);
}

/* Timeline scrubber: track, one clip, a playhead parked mid-shot */
.vignette-scrubber {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  width: min(24rem, 80%);
}

.timecode {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}

.track {
  position: relative;
  height: 2.5rem;
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-surface);
}

.clip {
  position: absolute;
  top: var(--space-2xs);
  bottom: var(--space-2xs);
  left: 12%;
  width: 55%;
  border: var(--border-width-thin) solid var(--color-secondary-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-secondary-subtle-bg);
}

.playhead {
  position: absolute;
  top: calc(-1 * var(--space-2xs));
  bottom: calc(-1 * var(--space-2xs));
  left: 42%;
  width: var(--border-width-thick);
  background-color: var(--color-accent-default);
  transition: left var(--duration-slow) var(--ease-in-out);
}

.vignette:hover .playhead {
  left: 58%;
}

@media (prefers-reduced-motion: reduce) {
  .vignette:hover .playhead {
    left: 42%;
  }
}

.ticks {
  display: flex;
  justify-content: space-between;
}

.tick {
  width: var(--border-width-thin);
  height: var(--space-xs);
  background-color: var(--color-border-default);
}

/* kaki: one curve, its two handles (handle 1 owns kaki, handle 2 seiji) */
.vignette-easing {
  width: min(16rem, 70%);
}

.axis {
  stroke: var(--color-border-default);
  stroke-width: 1;
}

.handle {
  stroke: var(--color-secondary-default);
  stroke-dasharray: 3 3;
  stroke-width: 1;
}

.handle-dot {
  fill: var(--color-secondary-default);
}

.handle.is-kaki {
  stroke: var(--color-accent-default);
}

.handle-dot.is-kaki {
  fill: var(--color-accent-default);
}

.curve {
  fill: none;
  stroke: var(--color-accent-default);
  stroke-linecap: round;
  stroke-width: 2.5;
}

/* Agile UI: one component, its variants, the way Storybook lays them out */
.vignette-library {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  align-items: center;
}

.variant-row {
  display: flex;
  gap: var(--space-sm);
}

.ui-button {
  padding: var(--space-xs) var(--space-md);
  border: var(--border-width-thin) solid transparent;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.is-solid {
  background-color: var(--color-accent-default);
  color: var(--color-text-on-accent);
}

.is-outline {
  border-color: var(--color-border-default);
}

.is-ghost {
  color: var(--color-text-secondary);
}

/* the hover state demos a focus ring: the library's a11y is the point */
.is-solid {
  outline: var(--border-width-thick) solid transparent;
  outline-offset: var(--focus-ring-offset);
  transition: outline-color var(--duration-fast) var(--ease-out);
}

.vignette:hover .is-solid {
  outline-color: var(--color-focus-ring);
}

.variant-caption {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}

/* Agile Data Hub: two datasets on the shelf, trajectory and price tag */
.vignette-market {
  display: flex;
  gap: var(--space-md);
}

.dataset-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-2xs) var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-surface);
  transition: border-color var(--duration-fast) var(--ease-out);
}

.vignette:hover .dataset-card:first-child {
  border-color: var(--color-accent-default);
}

.trace {
  grid-column: 1 / -1;
  width: 7rem;
}

.trace-path {
  fill: none;
  stroke: var(--color-secondary-default);
  stroke-linecap: round;
  stroke-width: 2;
}

.trace-path.is-accent {
  stroke: var(--color-accent-default);
}

.dataset-name {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}

.dataset-price {
  color: var(--color-text-secondary);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}
</style>
