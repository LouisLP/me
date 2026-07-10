<script setup lang="ts">
import type { Project } from '@/content/projects'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <ul class="list">
    <li v-for="project in projects" :key="project.title">
      <a
        class="row"
        :href="project.href"
        target="_blank"
        rel="noopener"
      >
        <span class="row-head">
          <span class="row-title">{{ project.title }}</span>
          <span class="row-arrow" aria-hidden="true">↗</span>
        </span>
        <span class="row-description">{{ project.description }}</span>
        <span class="row-meta">{{ project.meta }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.list {
  padding: 0;
  list-style: none;
}

.list li + li .row {
  border-top: var(--border-width-thin) solid var(--color-border-subtle);
}

.row {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding-block: var(--space-lg);
  color: inherit;
  text-decoration: none;
}

.row-head {
  display: flex;
  gap: var(--space-sm);
  align-items: baseline;
  justify-content: space-between;
}

.row-title {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-tight);
  transition: color var(--duration-fast) var(--ease-out);
}

.row-arrow {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-sm);
  transition:
    color var(--duration-fast) var(--ease-out),
    translate var(--duration-fast) var(--ease-out);
}

.row:hover .row-title,
.row:focus-visible .row-title {
  color: var(--color-accent-hover);
}

.row:hover .row-arrow,
.row:focus-visible .row-arrow {
  color: var(--color-accent-default);
  translate: 2px -2px;
}

@media (prefers-reduced-motion: reduce) {
  .row:hover .row-arrow,
  .row:focus-visible .row-arrow {
    translate: none;
  }
}

.row-description {
  max-width: 44rem;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.row-meta {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}
</style>
