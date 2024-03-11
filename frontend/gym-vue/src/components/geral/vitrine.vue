<script setup>
import sliderVue from './sliderComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import cardProduto from './card-produto.vue'
</script>

<template>
  <section class="vitrine-home">
    <h1 class="vitrine-titulo">{{titulo}}</h1>
    <sliderVue :slidesPerView="'auto'" :spaceBetween="10" v-if="produtosCard.length">
      <swiper-slide v-for="produto in produtosCard" :key="produto.id" class="card-product">
        <cardProduto :produto="produto"/>
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
}
</script>

<style>
.vitrine-home {
  padding: 16px;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vitrine-home h1 {
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

.card-product .image-product-card{
  max-width: 100%;
  width: 270px;
  height: 270px;
}
</style>