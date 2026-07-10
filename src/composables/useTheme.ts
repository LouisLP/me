import { ref, watchEffect } from 'vue'

type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

function storedTheme(): Theme {
  return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
}

/**
 * Dark is the canvas default (see tokens/semantic.css); light is the opt-in.
 * The choice persists across visits.
 */
export function useTheme() {
  const theme = ref<Theme>(storedTheme())

  watchEffect(() => {
    if (theme.value === 'light')
      document.documentElement.dataset.theme = 'light'
    else
      delete document.documentElement.dataset.theme
    localStorage.setItem(STORAGE_KEY, theme.value)
  })

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggle }
}
