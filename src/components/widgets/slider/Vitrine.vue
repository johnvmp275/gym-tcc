<script setup>
import { RouterLink } from 'vue-router'
import sliderVue from './SliderComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<template>
  <section class="vitrine-home">
    <h1 class="vitrine-titulo">{{titulo}}</h1>
    <sliderVue :slidesPerView="'auto'" :spaceBetween="10" v-if="produtosCard.length">
      <swiper-slide v-for="produto in produtosCard" :key="produto.id" class="card-product">
        <RouterLink :to="`/produto/${produto.id}`">
          <img class="image-product" :src="produto.image" alt="" />
        </RouterLink>
        <Strong class="produto-titulo">{{ produto.titulo }}</Strong>
        <p class="produto-descricao">{{ produto.descricoes.curta }}</p>
        <strong>{{ produto.price }}</strong>
        <RouterLink class="detalhe-produto" :to="`/produto/${produto.id}`">
          Ver detalhes
        </RouterLink>
      </swiper-slide>
    </sliderVue>
  </section>
</template>

<script>

export default {
  props: {
    produtosCard: Array,
    titulo: String,
    fetchProductDetails: Function
  },
  mounted(){

  }
}
</script>

<style scoped>
.vitrine-home {
  padding: 16px;
  max-width: 1330px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  text-align: center;
  font-size: 25px;
  margin-bottom: 15px;
}

.vitrine-home .card-product {
  border: 2px solid var(--background-gray);
  padding: 10px;
  width: 320px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.card-product .image-product {
  width: 100%;
  height: 270px;
  object-fit: cover;
  object-position: center;
}

.card-product .produto-descricao,
.card-product .produto-titulo {
  max-width: 400px;
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
</style>