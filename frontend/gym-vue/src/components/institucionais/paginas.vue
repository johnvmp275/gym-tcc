<script setup>
import Dropdown from '@/components/geral/dropdown.vue'
import apiService from '@/components/store/fetchData.js'
import loader from '../geral/loader.vue'
</script>

<template>
  <loader :isLoaderActive="isLoaderActive" />
  <section class="container">
    <div class="nav-paginas">
      <Dropdown titlteDropdown="Institucionais">
        <template #dropdown_description>
          <span v-for="item in pagina" :key="item.id">
            <RouterLink :to="item.path"> {{ item.label }}</RouterLink>
          </span>
        </template>
      </Dropdown>
    </div>
    <div class="paginas" v-html="conteudoPagina"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pagina: [],
      conteudoPagina: '',
      isLoaderActive: true
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
        this.menu = menu.find((item) => item.paginas)
        this.pagina = this.menu.paginas
        this.conteudoPagina = this.pagina.find((item) => item.path == this.paginaEscolhida).conteudo
        this.isLoaderActive = false
      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
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

select {
  width: 100%;
}

a {
  color: var(--background-gray-400);
}

a.router-link-active {
  color: var(--background-gray-700);
  font-weight: bold;
}

@media (max-width: 1100px) {
  section {
    flex-direction: column;
    padding: 16px;
  }

  .nav-paginas {
    margin: 0 auto;
  }
}
</style>
