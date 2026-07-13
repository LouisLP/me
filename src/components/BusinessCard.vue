<script setup lang="ts">
import { useCardTilt } from '@/composables/useCardTilt'
import { useRoleCycle } from '@/composables/useRoleCycle'
import { profile } from '@/content/profile'

const { transform } = useCardTilt()
const { index: roleIndex } = useRoleCycle(profile.roles)
</script>

<template>
  <div class="card">
    <header class="card-head">
      <p class="card-name">
        {{ profile.name }}<span class="dot">.</span>
      </p>
      <Transition name="role-fade" mode="out-in">
        <p :key="roleIndex" class="card-role">
          {{ profile.roles[roleIndex] }}
        </p>
      </Transition>
    </header>

    <p class="card-bio">
      I spent years making video move. Now I build interfaces
      that do.
    </p>

    <footer class="card-links">
      <a :href="`mailto:${profile.email}`">email</a>
      <a :href="profile.github" target="_blank" rel="noopener">github</a>
      <a :href="profile.linkedin" target="_blank" rel="noopener">linkedin</a>
    </footer>

    <p class="status-badge">
      <!-- Lines ordered left to right so odd/even alternates symmetrically -->
      <svg class="status-rays" viewBox="0 0 120 40" aria-hidden="true">
        <line x1="31" y1="36.2" x2="25.2" y2="34.7" />
        <line x1="37" y1="24.7" x2="27.8" y2="17" />
        <line x1="47.3" y1="16.8" x2="44.8" y2="11.4" />
        <line x1="60" y1="14" x2="60" y2="2" />
        <line x1="72.7" y1="16.8" x2="75.2" y2="11.4" />
        <line x1="83" y1="24.7" x2="92.2" y2="17" />
        <line x1="89" y1="36.2" x2="94.8" y2="34.7" />
      </svg>
      <span class="status-text">Open to Frontend & Design Engineer roles</span>
    </p>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  max-width: 42rem;
  padding: var(--space-2xl);
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-surface);
  box-shadow: var(--shadow-md);
  transform: v-bind(transform);
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-lg);
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
  font-size: var(--font-size-3xl);
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
  font-size: var(--font-size-md);
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

/* Old-timey ad emphasis, shrunk to a stamp pinned on the card corner —
   a detail to notice on second glance, not a headline. */
.status-badge {
  position: absolute;
  top: -0.75rem;
  right: var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5.5rem;
  border: var(--border-width-thin) dashed var(--color-border-default);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-surface);
  padding-block: var(--space-2xs);
  padding-inline: var(--space-2xs);
  rotate: -6deg;
}

.status-rays {
  width: 2.25rem;
  margin-bottom: 0.15rem;
  stroke: var(--color-border-default);
  stroke-linecap: round;
  stroke-width: 3;
}

.status-rays line:nth-child(odd) {
  stroke: var(--color-secondary-default);
}

.status-rays line:nth-child(even) {
  stroke: var(--color-accent-default);
}

.status-text {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: 0.6rem;
  letter-spacing: var(--letter-spacing-wide);
  line-height: var(--line-height-tight);
  text-align: center;
  text-transform: uppercase;
}

.role-fade-enter-active,
.role-fade-leave-active {
  transition:
    opacity var(--duration-normal) var(--ease-out),
    translate var(--duration-normal) var(--ease-out);
}

.role-fade-enter-from {
  opacity: 0;
  translate: 0 0.25em;
}

.role-fade-leave-to {
  opacity: 0;
  translate: 0 -0.25em;
}

@media (prefers-reduced-motion: reduce) {
  .role-fade-enter-active,
  .role-fade-leave-active {
    transition: none;
  }
}
</style>
