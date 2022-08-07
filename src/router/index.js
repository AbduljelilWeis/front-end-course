import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlankPage from '../views/BlankPage.vue'
import flex from '../views/flex.vue'
import Grid from '../views/Grid.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blank',
      name: 'blank',
      component: BlankPage
    },
    {
      path: '/flex',
      name: 'flex',
      component: flex
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    }
  ]
})

export default router
