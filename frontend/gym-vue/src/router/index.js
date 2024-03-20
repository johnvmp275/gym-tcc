import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/pages/index.vue'
import detalheProduto from '../components/pages/detalheProduto.vue'
import categorias from '../components/lista/categorias.vue'
import pagina404 from '../components/layouts/error.vue'
import paginas from '../components/institucionais/paginas.vue'
import checkout from '@/components/geral/checkout/checkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/checkout/:path',
      name: 'Checkout',
      component: checkout
    },
    {
      path: '/produto/:id',
      name: 'Produto',
      component: detalheProduto
    },
    {
      path: '/busca',
      name: 'Busca',
      component: categorias,
      props: (route) => ({ busca: route.query.busca })
    },
    {
      path: '/categorias/:path',
      name: 'Categoria',
      component: categorias
    },
    {
      path: '/pagina/:path',
      name: 'Páginas',
      component: paginas
    },
    {
      path: '/404',
      name: '404',
      component: pagina404
    },
    { 
     path: '/:path',
     redirect: '/404' 
    }
  ]
})

export default router
