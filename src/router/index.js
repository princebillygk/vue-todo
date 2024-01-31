import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../views/AboutPage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
