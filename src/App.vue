<script setup lang="ts">
import BioSection from '@/components/BioSection.vue'
import BusinessCard from '@/components/BusinessCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteNav from '@/components/SiteNav.vue'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { projects } from '@/content/projects'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
] as const

const { activeId } = useScrollSpy(sections.map(section => section.id))
</script>

<template>
  <div class="layout">
    <header class="rail">
      <SiteNav :sections="sections" :active-id="activeId" />
    </header>

    <main class="content">
      <section class="hero" aria-label="Introduction">
        <BusinessCard />
      </section>

      <section id="about" class="section">
        <h2 class="section-title">
          About
        </h2>
        <BioSection />
      </section>

      <section id="projects" class="section">
        <h2 class="section-title">
          Selected projects
        </h2>
        <div class="cards">
          <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
        </div>
      </section>
    </main>
  </div>

  <SiteFooter />
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
  max-width: 68rem;
  margin-inline: auto;
  padding: var(--space-section) var(--space-gutter);
}

.rail {
  align-self: start;
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
  min-width: 0;
}

@media (min-width: 800px) {
  .layout {
    grid-template-columns: 15rem 1fr;
    gap: var(--space-3xl);
  }

  .rail {
    position: sticky;
    top: var(--space-section);
  }
}

.section-title {
  margin-bottom: var(--space-lg);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
}

.cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
</style>
