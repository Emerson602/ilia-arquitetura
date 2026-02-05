import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects', 
    component: function () {
      return import('../views/ProjectsView.vue')
    }
  },
    {
    path: '/form',
    name: 'form', 
    component: function () {
      return import('../views/FormView.vue')
    }
  },
  {
    path: '/contato',
    name: 'contato', 
    component: function () {
      return import('../views/LinksView.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
