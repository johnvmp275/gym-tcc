<script setup>
import Dropdown from '@/components/geral/dropdown.vue'
import apiService from '@/components/store/fetchData.js'
import loader from '../geral/loader.vue'
</script>

<template>
  <main>
    <loader :isLoaderActive="isLoaderActive" />
    <section class="container">
      <div class="nav-paginas">
        <Dropdown :titlteDropdown="item.label" v-for="item in menuNv" :key="item.id">
          <span>{{ item.label }}</span>
          <template #dropdown_description>
            <ul class="dropdown-menu">
              <li v-for="sub in item.sub" :key="sub.id">
                <RouterLink class="link-institucionais" :to="sub.path">
                  {{ sub.label }}
                </RouterLink>
              </li>
            </ul>
          </template>
        </Dropdown>
      </div>
      <div class="paginas" v-html="conteudoPagina"></div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      pagina: [],
      conteudoPagina: '',
      isLoaderActive: true,
      menuNv: []
    }
  },
  methods: {
    async fetchData() {
      this.isLoaderActive = true

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })

      try {
        const menu = await apiService.getDadosOfMenus()

        this.pagina = menu.find((item) => item.paginas).paginas
        this.conteudoPagina = this.pagina.find((item) => item.path == this.paginaEscolhida).conteudo

        const menus = await apiService.getDadosOfMenus()

        const menuRodape = menus.find((item) => item.rodape_menu).rodape_menu
        this.menuNv = menuRodape

        this.isLoaderActive = false
      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
        this.$router.push({ path: '/404' })
      }
    }
  },
  computed: {
    paginaEscolhida() {
      return this.$route.params.path
    }
  },
  watch: {
    '$route.params.path': {
      emit: true,
      handler(produtoEscolhido) {
        this.fetchData()
      }
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>
.container {
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  gap: 10px;
}

.nav-paginas {
  display: flex;
  min-width: 281px;
  flex-direction: column;
}

.paginas {
  width: 100%;
  padding: 25px;
}

a {
  color: var(--background-gray-400);
}

a.router-link-active {
  color: var(--background-gray-700);
  font-weight: bold;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1100px) {
  section {
    flex-direction: column;
    padding: 16px;
  }

  .nav-paginas {
    width: 100%;
    margin: 0 auto;
  }
  .paginas {
    padding: 0;
  }
}
</style>
