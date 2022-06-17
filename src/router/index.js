import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
    
  },
  {
    path: '/works',
    name: 'works',
    component: () => import( '../views/WorksViev.vue')
  },
  {
    path: '/WebDev',
    name: 'WebDev',
    component: () => import( '../views/works/DevView.vue')
  },
  {
    path: '/Design',
    name: 'Design',
    component: () => import( '../views/works/DesignView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: () => import( '../views/404.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
