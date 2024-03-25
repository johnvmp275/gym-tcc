<script setup>
import sliderVue from '../geral/sliderComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<template>
  <sliderVue
    :loop="true"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false
    }"
    v-if="banners.length"
  >
    <swiper-slide v-for="banner in banners" :key="banner.id">
      <RouterLink to="/categorias/suplementos">
        <img class="banner-format-desktop" :src="banner.imageDesktop" :alt="banner.label" />
        <img class="banner-format-mobile" :src="banner.imageMobile" :alt="banner.label" />
      </RouterLink>
    </swiper-slide>
  </sliderVue>
</template>

<script>
export default {
  props: {
    banners: Array
  }
}
</script>

<style scoped>
a {
  padding: 0;
}

.banner-format-mobile {
  display: none;
}

@media (max-width: 876px) {
  .banner-format-desktop {
    display: none;
  }
  .banner-format-mobile {
    display: block;
  }
}
</style>
