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
    <h1 class="wordmark">
      {{ profile.name }}<span class="dot">.</span>
    </h1>

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

    <div class="meta">
      <p class="status">
        <span class="status-dot" aria-hidden="true" />
        Open to Design Engineer roles
      </p>
      <button
        type="button"
        class="theme-toggle"
        :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggle"
      >
        <IconSun v-if="theme === 'dark'" />
        <IconMoon v-else />
      </button>
    </div>
  </div>
</template>

<style scoped>
.rail {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
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

.meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  align-items: flex-start;
}

/* Styled like a quiet notification: seiji lines around the live status */
.status {
  display: inline-flex;
  gap: var(--space-xs);
  align-items: center;
  padding: var(--space-2xs) var(--space-sm);
  border: var(--border-width-thin) solid var(--color-secondary-border);
  border-radius: var(--radius-full);
  background-color: var(--color-success-subtle-bg);
  color: var(--color-success-subtle-fg);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background-color: var(--color-success-default);
}

.theme-toggle {
  display: grid;
  padding: var(--space-2xs);
  border: none;
  background: none;
  color: var(--color-text-muted);
  cursor: pointer;
  place-items: center;
  transition: color var(--duration-fast) var(--ease-out);
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
    gap: var(--space-md);
  }

  .links {
    flex-direction: row;
    gap: var(--space-lg);
  }

  .link::before {
    display: none;
  }

  .meta {
    flex-direction: row;
    gap: var(--space-md);
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
