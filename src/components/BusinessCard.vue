<script setup lang="ts">
import { useCardTilt } from '@/composables/useCardTilt'
import { profile } from '@/content/profile'

const { transform, onPointerMove, onPointerLeave } = useCardTilt()
</script>

<template>
  <div
    class="card"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <header class="card-head">
      <p class="card-name">
        {{ profile.name }}<span class="dot">.</span>
      </p>
      <p class="card-role">
        {{ profile.role }}
      </p>
    </header>

    <p class="card-bio">
      I spent years making video move: editing, grading, animating type.
      These days I build interfaces, where the same instincts (timing,
      rhythm, hierarchy) get rendered by a browser instead of a timeline.
      Design engineering is where the two halves meet.
    </p>

    <footer class="card-links">
      <a :href="`mailto:${profile.email}`">email</a>
      <a :href="profile.github" target="_blank" rel="noopener">github</a>
      <a :href="profile.linkedin" target="_blank" rel="noopener">linkedin</a>
    </footer>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  max-width: 34rem;
  padding: var(--space-xl);
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-surface);
  box-shadow: var(--shadow-sm);
  transform: v-bind(transform);
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card-head {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  padding-bottom: var(--space-md);
  border-bottom: var(--border-width-thin) solid var(--color-border-subtle);
}

.card-name {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-tight);
}

.dot {
  color: var(--color-accent-default);
}

.card-role {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}

.card-bio {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.card-links {
  display: flex;
  gap: var(--space-lg);
}

.card-links a {
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}
</style>
