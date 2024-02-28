<script setup>
import sliderVue from '../slider/SliderComponent.vue';
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
      <img :src="banner.image" :alt="banner.label" />
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