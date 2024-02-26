<script setup>
import sliderVue from '@/components/widgets/SliderComponent.vue'
import apiService from '@/js/fetchData'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<template>
  <sliderVue 
    :navigation="true" 
    :loop="true" 
    :pagination="{
      clickable: true
    }" 
    :autoplay="{
    delay: 4000,
    disableOnInteraction: false,
    }" 
    v-if="principalBanner.length"
  >
    <swiper-slide v-for="banner in principalBanner" :key="banner.id">
      <img :src="banner.link" :alt="banner.label" />
    </swiper-slide>
  </sliderVue>

  <section class="pitchbar-home">
    <div>
    <img src="https://www.usealphaco.com.br/upload/banner/324fdf135cc972fd34066bb8ac6a2280.webp" alt="logo">
    <p>
      <strong>FRETE GRÁTIS</strong>
      A partir de R$ 165 para todo o Brasil
    </p>
    </div>
    <div>
    <img src="https://www.usealphaco.com.br/upload/banner/324fdf135cc972fd34066bb8ac6a2280.webp" alt="logo">
    <p>
      <strong>FRETE GRÁTIS</strong>
      A partir de R$ 165 para todo o Brasil
    </p>
    </div>
    <div>
    <img src="https://www.usealphaco.com.br/upload/banner/324fdf135cc972fd34066bb8ac6a2280.webp" alt="logo">
    <p>
      <strong>FRETE GRÁTIS</strong>
      A partir de R$ 165 para todo o Brasil
    </p>
    </div>
    <div>
    <img src="https://www.usealphaco.com.br/upload/banner/324fdf135cc972fd34066bb8ac6a2280.webp" alt="logo">
    <p>
      <strong>FRETE GRÁTIS</strong>
      A partir de R$ 165 para todo o Brasil
    </p>
    </div>
  </section>
  
</template>

<script>
export default {
  data() {
    return {
      principalBanner: []
    }
  },
  methods: {
    async getDadosOfCategories() {
      try {
        const banners = await apiService.getDadosOfBanner()
        this.principalBanner = banners[0].bannerPrincipal

      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
      }
    },
  },
  mounted() {
    this.getDadosOfCategories();
  }
}
</script>

<style scoped>
.pitchbar-home{
  display: flex;
  justify-content: space-around;
  padding: 32px 80px;
  width: 100%;
  height: auto;
  background: var(--background-wine);
  color: var(--background-white);
}

.pitchbar-home div{
  display: flex;
  /* border-left: 2px solid var(--background-white); */
  gap: 16px;
}

.pitchbar-home p{
  display: flex;
  font-size: 12px;
  height: 40px;
  flex-direction: column;
}

.pitchbar-home p strong{
  font-size: 16px;
}
</style>
