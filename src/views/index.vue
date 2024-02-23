<script setup>
import sliderVue from '@/components/widgets/slider.vue'
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
    v-if="img.length"
  >
    <swiper-slide v-for="img in img" :key="img.id">
      <img :src="img.link" :alt="img.label" />
    </swiper-slide>
  </sliderVue>
</template>

<script>
export default {
  data() {
    return {
      img: [
        {
          link: 'https://www.oceandrop.com.br/media/pdp-seo/blog-ocean/suplementacao-para-iniciantes-na-academia.jpg',
          label: 'bannerPrincipal'
        },
        {
          link: 'https://rafaelpersonaltrainer.com.br/wp-content/uploads/2023/11/beneficios-da-musculacao-scaled.jpeg',
          label: 'bannerPrincipal'
        },
        {
          link: 'https://greenlifeacademias.com.br/wp/wp-content/uploads/2023/04/2.jpg',
          label: 'bannerPrincipal'
        }
      ]
    }
  }
}
</script>
