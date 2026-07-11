<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import IconImage from '~icons/lucide/image'
import ProjectVignette from '@/components/ProjectVignette.vue'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'

const route = useRoute()
const project = computed(() =>
  projects.find(entry => entry.slug === route.params.slug),
)

watchEffect(() => {
  document.title = project.value
    ? `${project.value.title} · ${profile.name}`
    : profile.name
})
</script>

<template>
  <main class="page">
    <nav class="crumbs" aria-label="Back">
      <RouterLink class="back" :to="{ path: '/', hash: '#projects' }">
        ← all projects
      </RouterLink>
    </nav>

    <template v-if="project">
      <header class="head">
        <h1 class="title">
          {{ project.title }}
        </h1>
        <p class="meta">
          {{ project.meta }}
        </p>
      </header>

      <div class="hero">
        <ProjectVignette :variant="project.preview" />
      </div>

      <article class="body">
        <p v-for="paragraph in project.body" :key="paragraph">
          {{ paragraph }}
        </p>
      </article>

      <section v-if="project.screenshots.length" class="shots" aria-label="Screenshots">
        <figure v-for="shot in project.screenshots" :key="shot.caption" class="shot">
          <span class="shot-frame">
            <img v-if="shot.src" :src="shot.src" :alt="shot.alt" loading="lazy">
            <IconImage v-else class="shot-placeholder" aria-hidden="true" />
          </span>
          <figcaption class="shot-caption">
            {{ shot.caption }}
          </figcaption>
        </figure>
      </section>

      <p v-if="project.href" class="source">
        <a :href="project.href" target="_blank" rel="noopener">view source ↗</a>
      </p>
    </template>

    <template v-else>
      <h1 class="title">
        Nothing here
      </h1>
      <p class="missing">
        That project doesn't exist (yet). <RouterLink to="/">Head back home</RouterLink>.
      </p>
    </template>
  </main>
</template>

<style scoped>
/* A focused reading column, narrower than the home layout */
.page {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  max-width: 44rem;
  margin-inline: auto;
  padding: var(--space-section) var(--space-gutter);
}

.back {
  font-family: var(--font-code);
  font-size: var(--font-size-sm);
  text-decoration: none;
}

.back:hover {
  text-decoration: underline;
}

.head {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.title {
  font-size: var(--font-size-3xl);
}

.meta {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}

.hero {
  display: grid;
  min-height: 13rem;
  border: var(--border-width-thin) solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-surface);
  place-items: center;
}

.body {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.body p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.body p:first-child {
  color: var(--color-text-primary);
}

.shots {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-top: var(--space-md);
}

.shot {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.shot-frame {
  display: grid;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-surface);
  place-items: center;
}

.shot-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shot-placeholder {
  width: var(--space-xl);
  height: var(--space-xl);
  color: var(--color-text-muted);
}

.shot-caption {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}

.source a,
.missing {
  font-family: var(--font-code);
  font-size: var(--font-size-sm);
}

.missing {
  color: var(--color-text-secondary);
}
</style>
