<script setup>
import loaderVue from '@/components/widgets/loader/loader.vue'
import paginationView from './pagination/paginationView.vue'
</script>

<template>
  <loaderVue :isLoaderActive="loaderActive" />
  <section class="categorie-filter">
    <div class="filter-product">
      <span>Filtro</span>
    </div>
    <template v-if="productCategorie.length">
      <section class="categorie-product-container">
        <div class="categorie-top">
          <div>
            Exibindo
            <span>{{ itensPorPagina }} de {{ productCategorie.length }} produtos</span> nessa
            categoria
          </div>
          <div>
            Itens por Página:
            <select name="select" id="select" v-model="itensPorPagina">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <section class="categories-product">
          <div class="container-product">
            <div class="card-product" v-for="produto in produtosPorPagina" :key="produto.id">
              <RouterLink class="image-link" :to="`/produto/${produto.id}`">
                <img class="image-product" :src="produto.image" alt="" />
              </RouterLink>
              <Strong class="produto-titulo">{{ produto.titulo }}</Strong>
              <p class="produto-descricao">{{ produto.descricoes.curta }}</p>
              <strong class="product-price">R$ {{ produto.price }}</strong>
              <RouterLink class="detalhe-produto" :to="`/produto/${produto.id}`">
                Ver detalhes
              </RouterLink>
            </div>
          </div>
        </section>
        <paginationView
          :paginaAtual="paginaAtual"
          :itensCategoria="productCategorie"
          :totalPages="totalPages"
          @paginaMudada="atualizarPagina"
        />
      </section>
    </template>

    <template v-else>
      <section class="categorie-product-container categorie-not-found">
        <span>
          <h1>
            A categoria "<span>{{ categories }}</span
            >" infelizmente não foi encontrada :(
          </h1>
          Mas indicamos para você alguns produtos!
        </span>
        <div class="categorie-top">ordenacao</div>
        <div class="container-product">
          <div class="card-product" v-for="produto in sugestoesProdutos" :key="produto.id">
            <RouterLink class="image-link" :to="`/produto/${produto.id}`">
              <img class="image-product" :src="produto.image" alt="" />
            </RouterLink>
            <Strong class="produto-titulo">{{ produto.titulo }}</Strong>
            <p class="produto-descricao">{{ produto.descricoes.curta }}</p>
            <strong class="product-price">R$ {{ produto.price }}</strong>
            <RouterLink class="detalhe-produto" :to="`/produto/${produto.id}`">
              Ver detalhes
            </RouterLink>
          </div>
        </div>
      </section>
    </template>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productCategorie: [],
      loaderActive: true,
      sugestoesProdutos: [],
      itensPorPagina: 12,
      paginaAtual: 1
    }
  },
  computed: {
    totalPages() {
      const allItems = this.productCategorie || []
      return Math.ceil(allItems.length / this.itensPorPagina)
    },
    produtosPorPagina() {
      const startIndex = (this.paginaAtual - 1) * this.itensPorPagina
      const endIndex = startIndex + parseInt(this.itensPorPagina)
      const allItems = this.productCategorie || []

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
        this.productCategorie = data.filter((item) => item.categorie === this.categories)

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
    }
  },
  mounted() {
    this.fetchCategories()
  }
}
</script>

<style scoped>
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

.categorie-not-found span {
  text-align: center;
  margin: 20px 0 20px 0;
}

.card-product {
  border: 2px solid var(--background-gray);
  padding: 10px;
  width: 204px;
  height: 414px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.card-product .image-product {
  max-width: 100%;
  margin: 0 auto;
  height: 170px;
  object-fit: contain;
  object-position: center;
}

.card-product .produto-descricao,
.card-product .produto-titulo {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-product .detalhe-produto {
  background: var(--background-wine);
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--background-white);
  font-size: 16px;
  font-weight: bold;
}

.detalhe-produto:hover {
  background: red;
}

.categorie-not-found p {
  text-align: center;
}

.product-price {
  font-size: 24px;
}

h1 {
  font-size: 20px;
}

.image-link {
  padding: 0;
  margin: 0 auto;
}

@media (max-width: 450px) {
  .card-product {
    width: 165px;
  }

  .card-product .image-product {
    height: 150px;
  }

  .container-product{
    max-width: 350px;
  }
}

@media (max-width: 1100px) {
  .filter-product {
    display: none;
  }

  .card-product {
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
