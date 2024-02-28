<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/assets/main.css'

</script>

<template>
  <swiper 
    class="mySwiper"
    :modules="[Navigation, Pagination, Autoplay]" 
    :grab-cursor="true"
   >
   <slot/>
   
  </swiper>
</template>

<script>
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props:{
    modules: Array
  }
}
</script>
