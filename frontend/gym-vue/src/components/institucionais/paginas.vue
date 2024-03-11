<script setup>
import Dropdown from '@/components/geral/dropdown.vue'
import apiService from '@/js/fetchData.js'
</script>

<template>
  <section>
    <div class="nav-paginas">
      <!-- {{ teste }} -->
      <Dropdown titlteDropdown="Institucionais">
        <template #dropdown_description>
          <div v-for="pagina in paginas" :key="pagina.id">
            qwsqwsqwsqw
          </div>
          qwsqwsqws
        </template>
      </Dropdown>
      <!-- <select name="" id="" v-model="paginaEscolhida">
        <option value="institucionais">Institucionais</option>
        <option value="quem_somos">Quem somos</option>
      </select> -->
    </div>
    <div class="paginas" v-html="conteudoPagina"></div>
    <RouterView />
  </section>
</template>

<script>
export default {
  data() {
    return {
      pagina : [],
      conteudoPagina: ''
    }
  },
  methods: {
    async fetchData() {
      try {
        const menu = await apiService.getDadosOfMenus()
        this.menu = menu.find(item => item.paginas)
        this.pagina = this.menu.paginas
        this.conteudoPagina = this.pagina.find(item => item.path == this.paginaEscolhida).conteudo

        console.log(this.conteudoPagina);

      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
      }
    },
  },
  computed: {
    paginaEscolhida() {
      return this.$route.params.path
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>
section {
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  gap: 10px;
}

.nav-paginas {
  display: flex;
  min-width: 281px;
  height: 250px;
}

.paginas {
  width: 100%;
  padding: 25px;
}

select {
  width: 100%;
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
