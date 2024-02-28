<script setup>
import SliderVue from '@/components/widgets/slider/SliderComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Vitrine from '@/components/widgets/slider/Vitrine.vue'
import apiService from '@/js/fetchData.js'
</script>
<template>
  <section class="detalhe-produto container-div">
    <div class="container-produto">
      <SliderVue class="slider-produto" :slidesPerView="'auto'" :loop="true">
        <swiper-slide>
          <img class="image-produto" :src="product.image" alt="" srcset="" />
        </swiper-slide>
        <swiper-slide>
          <img class="image-produto" :src="product.image" alt="" srcset="" />
        </swiper-slide>
      </SliderVue>
      <div>
        <h1>{{ product.titulo }}</h1>
        <span class="produto-descricao">
          <p>{{ descricao.curta }}</p>
          <a href="#descricao" class="ancora-dropdown">Ler mais</a>
        </span>
      </div>
    </div>
    <div class="teste">
      <span class="produto-preco">R${{ product.price }}</span>
      <span>Quantidade:</span>
      <button>Adicionar ao carrinho</button>
    </div>
  </section>

  <section id="descricao" class="container-div">
    <h1>Saiba de tudo sobre esse produto</h1>
    <p>{{ descricao.longa }}</p>
  </section>

  <Vitrine :produtosCard="produtos"  :fetchData="fetchProductDetails"/>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      produtos: [],
      descricao: {}
    }
  },
  methods: {
    async fetchProductDetails() {
      try {
        const req = await fetch(`http://localhost:3000/produtos/${this.$route.params.id}`)
        const data = await req.json()
        this.product = data
        this.descricao = data.descricoes

        console.log(this.product)
      } catch (error) {
        console.error('Não foi possível buscar os dados', error)
        throw error
      }
    },
    async fetchData() {
      try {
        const vitrines = await apiService.getDadosOfVitrines()
        this.vitrine_home01 = vitrines.vitrine_home01
        this.produtos = vitrines.vitrine_home01.produtos

        console.log(this.produtos)
      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
      }
    }
  },
  mounted() {
    this.fetchProductDetails()
    this.fetchData()
  }
}
</script>

<style scoped>
.detalhe-produto {
  display: flex;
  width: 100%;
  gap: 16px;
  margin: 0 auto;
}
.image-produto {
  min-width: 370px;
  max-width: 370px;
  height: 370px;
  object-fit: cover;
  object-position: center;
}

.produto-descricao {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 10px;
  height: 100%;
}

.produto-descricao p {
  height: 160px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
}

.ancora-dropdown {
  padding: 0;
  text-decoration: underline;
  font-weight: bold;
  color: var(--background-wine);
}

div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.slider-produto {
  min-width: 370px;
  max-width: 370px;
}
.container-produto {
  flex-direction: row;
  gap: 10px;
  /* border: 2px solid var(--background-gray); */
  padding: 16px;
}

.teste {
  width: 322px;
}

.produto-preco {
  font-weight: bold;
  font-size: 24px;
}

h1 {
  font-size: 20px;
}

button {
  width: 100%;
  justify-content: center;
  background: var(--background-wine);
  color: var(--background-white);
}

.container-div {
  max-width: 1170px;
}

#descricao {
  margin: 40px auto;
}
</style>
