<script setup lang="ts">
import IconMoon from '~icons/lucide/moon'
import IconSun from '~icons/lucide/sun'
import { useTheme } from '@/composables/useTheme'
import { profile } from '@/content/profile'

defineProps<{
  sections: readonly { id: string, label: string }[]
  activeId: string
}>()

const { theme, toggle } = useTheme()
</script>

<template>
  <div class="rail">
    <div class="identity">
      <h1 class="wordmark">
        {{ profile.name }}<span class="dot">.</span>
      </h1>
      <div
        type="button"
        class="theme-toggle"
        :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggle"
      >
        <IconSun v-if="theme === 'dark'" />
        <IconMoon v-else />
      </div>
    </div>

    <nav aria-label="Sections">
      <ul class="links">
        <li v-for="section in sections" :key="section.id">
          <a
            :href="`#${section.id}`"
            class="link"
            :aria-current="section.id === activeId ? 'true' : undefined"
          >{{ section.label }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.rail {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  height: 100%;
}

.wordmark {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-tight);
}

.dot {
  color: var(--color-accent-default);
}

.links {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: 0;
  list-style: none;
}

.link {
  display: inline-flex;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

/* The dash grows in when a section is current — quiet, directional */
.link::before {
  width: 0;
  height: var(--border-width-thin);
  margin-right: 0;
  background-color: var(--color-accent-default);
  content: '';
  transition:
    width var(--duration-normal) var(--ease-out),
    margin-right var(--duration-normal) var(--ease-out);
}

.link:hover {
  color: var(--color-text-primary);
}

.link[aria-current='true'] {
  color: var(--color-text-primary);
}

.link[aria-current='true']::before {
  width: var(--space-md);
  margin-right: var(--space-xs);
}

.identity {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

/* A proper control: bordered, round, anchored at the rail's bottom */
.theme-toggle {
  display: grid;
  align-self: flex-end;
  width: 2.25rem;
  height: 2.25rem;
  margin-top: auto;
  background: none;
  color: var(--color-text-muted);
  cursor: pointer;
  place-items: center;
}

.theme-toggle svg {
  width: 1.1rem;
  height: 1.1rem;
}

.theme-toggle:hover {
  color: var(--color-text-primary);
}

/* Below the two-column breakpoint the rail is a compact header block */
@media (max-width: 799px) {
  .rail {
    position: relative;
    gap: var(--space-md);
  }

  .links {
    flex-direction: row;
    gap: var(--space-lg);
  }

  .link::before {
    display: none;
  }

  /* Keep the header compact: the toggle tucks into the top-right corner */
  .theme-toggle {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
