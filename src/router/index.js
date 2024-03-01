import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/index.vue'
import detalheProduto from '../views/produto/detalheProduto.vue'
import categorias from '../views/categorias/categorias.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/produto/:id',
      name: 'Produto',
      component: detalheProduto
    },
    {
      path: '/categorias/:path',
      name: 'Categoria',
      component: categorias
    }
  ]
})

export default router
