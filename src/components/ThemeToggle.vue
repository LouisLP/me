<script setup lang="ts">
import IconMoon from '~icons/lucide/moon'
import IconSun from '~icons/lucide/sun'
import { useTheme } from '@/composables/useTheme'

const { theme, toggle } = useTheme()
</script>

<template>
  <div
    type="button"
    class="theme-toggle"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
  >
    <IconSun v-if="theme === 'dark'" />
    <IconMoon v-else />
  </div>
</template>

<style scoped>
.theme-toggle {
  display: grid;
  width: 2.25rem;
  height: 2.25rem;
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
</style>
