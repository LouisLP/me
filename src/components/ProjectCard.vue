<script setup lang="ts">
import type { Component } from 'vue'
import type { Project } from '@/content/projects'
import IconImage from '~icons/lucide/image'
import KabukiCover from '@/components/covers/KabukiCover.vue'
import KakiCover from '@/components/covers/KakiCover.vue'

defineProps<{
  project: Project
}>()

// Hand-designed cover art for the projects that have one; everything else
// falls back to a real screenshot, then the placeholder icon.
const covers: Partial<Record<string, Component>> = {
  kabuki: KabukiCover,
  kaki: KakiCover,
}
</script>

<template>
  <RouterLink class="card" :to="`/projects/${project.slug}`">
    <div class="preview" :data-slug="project.slug">
      <component :is="covers[project.slug]" v-if="covers[project.slug]" class="cover-art" />
      <img
        v-else-if="project.hero"
        :src="project.hero.src"
        :alt="project.hero.alt"
        loading="lazy"
      >
      <IconImage v-else class="preview-placeholder" aria-hidden="true" />
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
        <span class="read-more" aria-hidden="true">read more →</span>
      </p>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  display: block;
  overflow: hidden;
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-surface);
  color: inherit;
  text-decoration: none;
  transition:
    border-color var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
  color: inherit;
}

.preview {
  display: grid;
  height: 13rem;
  border-bottom: var(--border-width-thin) solid var(--color-border-subtle);
  background-color: var(--color-bg-canvas);
  grid-template-rows: 100%;
  place-items: center;
}

.preview img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Custom cover art is oversized and tilted a touch, like a print dropped
   onto the card; it settles flat and true on hover. */
.cover-art {
  width: 100%;
  height: 100%;
  scale: 1.08;
  transition:
    rotate var(--duration-normal) var(--ease-out),
    scale var(--duration-normal) var(--ease-out);
}

.preview[data-slug='kabuki'] .cover-art {
  rotate: -2.5deg;
}

.preview[data-slug='kaki'] .cover-art {
  rotate: 2deg;
}

.card:hover .cover-art {
  rotate: 0deg;
  scale: 1.02;
}

@media (prefers-reduced-motion: reduce) {
  .cover-art {
    transition: none;
  }
}

.preview-placeholder {
  width: var(--space-xl);
  height: var(--space-xl);
  color: var(--color-text-muted);
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
  transition: color var(--duration-fast) var(--ease-out);
}

.card:hover .title {
  color: var(--color-accent-hover);
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
.read-more {
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}

.meta {
  color: var(--color-text-muted);
}

.read-more {
  color: var(--color-text-muted);
  transition:
    color var(--duration-fast) var(--ease-out),
    translate var(--duration-fast) var(--ease-out);
}

.card:hover .read-more {
  color: var(--color-accent-default);
  translate: 2px 0;
}

@media (prefers-reduced-motion: reduce) {
  .card:hover .read-more {
    translate: none;
  }
}
</style>
