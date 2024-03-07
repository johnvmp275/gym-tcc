import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/index.vue'
import detalheProduto from '../views/produto/detalheProduto.vue'
import categorias from '../views/categorias/categorias.vue'
import pagina404 from '../views/404/pagina404.vue'
import paginas from '../views/institucionais/paginas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/paginas',
      name: 'Páginas',
      component: paginas
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
      path: '/:pathMatch(.*)*',
      name: '404',
      component: pagina404,
    },
  ]
})

export default router
