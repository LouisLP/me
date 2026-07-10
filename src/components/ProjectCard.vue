<script setup lang="ts">
import type { Project } from '@/content/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="card">
    <!-- Example design drawn in-card; decorative, described by the text below -->
    <div class="preview" aria-hidden="true">
      <div v-if="project.preview === 'tokens'" class="vignette vignette-tokens">
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

      <div v-else-if="project.preview === 'scrubber'" class="vignette vignette-scrubber">
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
        v-else-if="project.preview === 'easing'"
        class="vignette vignette-easing"
        viewBox="0 0 200 120"
      >
        <line x1="30" y1="100" x2="170" y2="100" class="axis" />
        <line x1="30" y1="100" x2="30" y2="20" class="axis" />
        <line x1="30" y1="100" x2="58" y2="30" class="handle" />
        <line x1="170" y1="20" x2="120" y2="20" class="handle" />
        <circle cx="58" cy="30" r="4" class="handle-dot" />
        <circle cx="120" cy="20" r="4" class="handle-dot" />
        <path d="M 30 100 C 58 30, 120 20, 170 20" class="curve" />
      </svg>

      <div v-else class="vignette vignette-type">
        <span class="specimen">Aa</span>
        <span class="specimen-caption">BRICOLAGE GROTESQUE · 04:03:00</span>
      </div>
    </div>

    <div class="body">
      <h3 class="title">
        {{ project.title }}
      </h3>
      <p class="description">
        {{ project.description }}
      </p>
      <p class="meta-row">
        <span class="meta">{{ project.meta }}</span>
        <a
          v-if="project.href"
          class="source"
          :href="project.href"
          target="_blank"
          rel="noopener"
        >view source ↗</a>
      </p>
    </div>
  </article>
</template>

<style scoped>
.card {
  overflow: hidden;
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-surface);
  transition:
    border-color var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.card:hover {
  border-color: var(--color-border-default);
  box-shadow: var(--shadow-md);
}

.preview {
  display: grid;
  min-height: 13rem;
  border-bottom: var(--border-width-thin) solid var(--color-border-subtle);
  background-color: var(--color-bg-canvas);
  place-items: center;
}

.body {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: var(--space-lg) var(--space-xl);
}

.title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
}

.description {
  max-width: 44rem;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.meta-row {
  display: flex;
  gap: var(--space-md);
  align-items: baseline;
  justify-content: space-between;
  margin-top: var(--space-xs);
}

.meta,
.source {
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}

.meta {
  color: var(--color-text-muted);
}

/* ------------------------------------------------------------------ */
/* Vignettes — example designs drawn with the semantic tokens          */
/* ------------------------------------------------------------------ */

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

.is-canvas { background-color: var(--color-bg-canvas); }
.is-surface { background-color: var(--color-bg-surface); }
.is-raised { background-color: var(--color-bg-surface-raised); }

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
  border-radius: var(--radius-sm);
  background-color: var(--color-secondary-subtle-bg);
  border: var(--border-width-thin) solid var(--color-secondary-border);
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

.card:hover .playhead {
  left: 58%;
}

@media (prefers-reduced-motion: reduce) {
  .card:hover .playhead {
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

/* Easing playground: one curve, its two handles */
.vignette-easing {
  width: min(16rem, 70%);
}

.axis {
  stroke: var(--color-border-default);
  stroke-width: 1;
}

.handle {
  stroke: var(--color-secondary-default);
  stroke-width: 1;
  stroke-dasharray: 3 3;
}

.handle-dot {
  fill: var(--color-secondary-default);
}

.curve {
  fill: none;
  stroke: var(--color-accent-default);
  stroke-width: 2.5;
  stroke-linecap: round;
}

/* Title cards: a type specimen on a baseline */
.vignette-type {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  align-items: center;
}

.specimen {
  padding-bottom: var(--space-2xs);
  border-bottom: var(--border-width-thin) solid var(--color-border-default);
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-tight);
}

.specimen-caption {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
}
</style>
