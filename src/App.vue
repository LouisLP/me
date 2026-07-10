<script setup lang="ts">
import BusinessCard from '@/components/BusinessCard.vue'
import ProjectList from '@/components/ProjectList.vue'
import SiteNav from '@/components/SiteNav.vue'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

const { activeId } = useScrollSpy(sections.map(section => section.id))
</script>

<template>
  <div class="layout">
    <header class="rail">
      <SiteNav :sections="sections" :active-id="activeId" />
    </header>

    <main class="content">
      <section id="about" class="section">
        <h2 class="visually-hidden">
          About
        </h2>
        <BusinessCard />
      </section>

      <section id="projects" class="section">
        <h2 class="section-title">
          Selected projects
        </h2>
        <ProjectList :projects="projects" />
      </section>

      <section id="contact" class="section">
        <h2 class="section-title">
          Say hello
        </h2>
        <p class="contact-note">
          The fastest way to reach me is email.
        </p>
        <a class="contact-email" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <p class="contact-links">
          <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        </p>
      </section>

      <footer class="colophon">
        <p>This site is the portfolio piece; <a :href="profile.repo" target="_blank" rel="noopener">read the source</a>.</p>
      </footer>
    </main>
  </div>
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

.contact-note {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.contact-email {
  display: inline-block;
  margin-top: var(--space-md);
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-tight);
}

.contact-links {
  display: flex;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
}

.contact-links a {
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}

.colophon {
  padding-top: var(--space-lg);
  border-top: var(--border-width-thin) solid var(--color-border-subtle);
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
}
</style>
