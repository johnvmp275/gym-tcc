<script setup>
import loaderVue from '@/components/geral/loader.vue'
import paginationView from '../listagem/paginacao.vue'
import cardProduto from '../geral/card-produto.vue';
</script>

<template>
  <loaderVue :isLoaderActive="loaderActive" />
  <section class="categorie-filter">
    <div class="filter-product">
      <span>Filtro</span>
    </div>
    <section class="categorie-product-container">
      <template v-if="productData.length">
        <div class="categorie-top">
          <div>
            Exibindo
            <span>{{ productData.length }} de {{ productData.length }} produtos</span>
            nessa página
          </div>
          <div>
            Itens por Página:
            <select name="select" id="select" v-model="itensPorPagina">
              <option value="12" selected>12</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <section class="categories-product">
          <div class="container-product">
            <div class="card-product-list" v-for="produto in produtosPorPagina" :key="produto.id">
              <cardProduto :produto="produto" />
            </div>
          </div>
        </section>
        <paginationView 
          :paginaAtual="paginaAtual" 
          :itensCategoria="productData" 
          :totalPages="totalPages"
          @paginaMudada="atualizarPagina" 
          />

      </template>

      <template v-else>
        <span class="product-not-found">
          <h1>
            O item "<span>{{ categories || busca }}</span>" infelizmente não foi encontrado :(
          </h1>
          Mas indicamos para você alguns produtos!
        </span>
        <section class="categories-product">
          <div class="container-product">
            <div class="card-product-list" v-for="produto in sugestoesProdutos" :key="produto.id">
              <cardProduto :produto="produto" />
            </div>
          </div>
        </section>
      </template>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productData: [],
      loaderActive: true,
      sugestoesProdutos: [],
      productBusca: [],
      itensPorPagina: 12,
      paginaAtual: 1
    }
  },
  props: {
    busca: String
  },
  computed: {
    totalPages() {
      const allItems = this.productData || []
      return Math.ceil(allItems.length / this.itensPorPagina)
    },
    produtosPorPagina() {
      const startIndex = (this.paginaAtual - 1) * this.itensPorPagina
      const endIndex = startIndex + parseInt(this.itensPorPagina)
      const allItems = this.productData || []

      return allItems.slice(startIndex, endIndex)
    }
  },
  methods: {
    async fetchCategories() {
      try {
        const req = await fetch('http://localhost:3000/produtos')
        const data = await req.json()

        this.categories = this.$route.params.path
        this.sugestoesProdutos = data.slice(0, 5)

        if (this.categories) {
          this.productData = data.filter((item) => item.categorie === this.categories)
        } else {
          this.productData = data.filter((item) =>
            item.titulo.toLowerCase().match(this.busca.toLowerCase())
          )
        }

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })

        this.loaderActive = false
        this.paginaAtual = 1
      } catch (error) {
        console.error('Não foi possível buscar os dados', error)
        throw error
      }
    },
    atualizarPagina(novaPagina) {
      this.paginaAtual = novaPagina
    }
  },
  watch: {
    '$route.params.path': {
      emit: true,
      handler(categoriaEscolhida) {
        this.fetchCategories()
      }
    },
    '$route.query.busca': {
      emit: true,
      handler() {
        this.fetchCategories()
      }
    }
  },
  mounted() {
    this.fetchCategories()
  }
}
</script>

<style>
.categorie-filter {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1330px;
  gap: 20px;
}

.filter-product {
  width: 290px;
}

.categorie-top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 20px 0;
}

.categorie-top div span {
  font-weight: bold;
}

.categorie-product-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 857px;
  padding: 0 5px;
}

.categorie-product-container .container-product {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.product-not-found  {
  text-align: center;
  margin: 20px 0 20px 0;
}

.card-product-list {
  border: 2px solid var(--background-gray);
  padding: 10px;
  width: 204px;
  height: 315px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.card-product-list .image-product-card {
  max-width: 100%;
  height: 160px;
}

.categorie-not-found p {
  text-align: center;
}

.product-price {
  font-size: 24px;
}

.categorie-filter h1 {
  font-size: 20px;
}

@media (max-width: 450px) {
  .card-product-list {
    width: 165px;
  }

  .card-product-list .image-product-card {
    width: 120px;
    height: 120px;
  }

  .container-product {
    max-width: 350px;
  }
}

@media (max-width: 1100px) {
  .filter-product {
    display: none;
  }

  .card-product-list {
    max-width: 189px;
  }

  .categorie-top {
    flex-direction: column;
    justify-content: center;
    height: auto;
    gap: 5px;
  }

  .categorie-product-container .container-product {
    padding: 5px;
  }
}

@media (max-width: 1000px) {
  .categories-product {
    margin: 0 auto;
  }
}
</style>
