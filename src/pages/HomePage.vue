<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BioSection from '@/components/BioSection.vue'
import BusinessCard from '@/components/BusinessCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ScrollCue from '@/components/ScrollCue.vue'
import SiteNav from '@/components/SiteNav.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useHeroScrollFade } from '@/composables/useHeroScrollFade'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
] as const

const { activeId } = useScrollSpy(sections.map(section => section.id))

const heroRef = ref<HTMLElement | null>(null)
const { opacity: scrollCueOpacity } = useHeroScrollFade(heroRef)

onMounted(() => {
  document.title = profile.name
})
</script>

<template>
  <div class="page">
    <section ref="heroRef" class="hero" aria-label="Introduction">
      <ThemeToggle class="hero-theme-toggle" />
      <BusinessCard />
      <ScrollCue :opacity="scrollCueOpacity" />
    </section>

    <div class="layout">
      <header class="rail">
        <SiteNav :sections="sections" :active-id="activeId" />
      </header>

      <main class="content">
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
            <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  padding: var(--space-gutter);
  /* The card's side rays may poke past the viewport on small screens */
  overflow-x: clip;
}

.hero-theme-toggle {
  position: absolute;
  top: var(--space-gutter);
  right: var(--space-gutter);
}

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
    /* Full viewport column so the rail's last item can anchor to the bottom */
    height: calc(100dvh - 2 * var(--space-section));
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
