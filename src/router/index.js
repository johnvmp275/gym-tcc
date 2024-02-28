import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/index.vue'
import detalheProduto from '../views/produto/detalheProduto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    { 
      path: '/:path', 
      name:'Product', 
      component: detalheProduto
   },
  ]
})

export default router
