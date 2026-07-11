import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects/:slug', component: ProjectPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition)
      return savedPosition
    if (to.hash) {
      // Give the target page a beat to render before anchoring to the hash
      return new Promise((resolve) => {
        setTimeout(resolve, 100, { el: to.hash, top: 32 })
      })
    }
    return { top: 0 }
  },
})
