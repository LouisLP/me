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

    <p class="status">
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
      <span class="status-text">Open to Design Engineer roles</span>
    </p>
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

/* Old-timey ad emphasis: rays radiating over the announcement.
   Scaled down and tucked under the wordmark so it reads as a tagline. */
.status {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 9.5rem;
  border: var(--border-width-thin) dashed var(--color-border-default);
  border-radius: var(--radius-lg);
  padding-block: var(--space-sm);
}

.status-rays {
  width: 4.5rem;
  margin-bottom: var(--space-2xs);
  stroke-linecap: round;
  stroke-width: 2.5;
}

/* Every second ray switches hue: kaki center fan, seiji between */
.status-rays line:nth-child(odd) {
  stroke: var(--color-secondary-default);
}

.status-rays line:nth-child(even) {
  stroke: var(--color-accent-default);
}

.status-text {
  color: var(--color-text-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  text-align: center;
  text-transform: uppercase;
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
