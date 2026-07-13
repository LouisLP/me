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
  </div>
</template>

<style scoped>
.card {
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
