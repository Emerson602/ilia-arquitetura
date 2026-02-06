import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/projetos',
    name: 'projetos', 
    component: function () {
      return import('../views/ProjectsView.vue')
    }
  },
    {
    path: '/formulario',
    name: 'formulario', 
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
