<script setup>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Inicialize a referência para o swiper de miniaturas
const thumbsSwiper = ref(null);

// Função para definir o swiper de miniaturas
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
    <div>
      <swiper
        :spaceBetween="10"
        :thumbs="{ swiper: thumbsSwiper }" 
        :modules="modules"
        :grab-cursor="true"
        class="mySwiper2"
      >
      <slot/>
      </swiper>
      <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper slider-image"
        :grab-cursor="true"
      >
        <slot/>
      </swiper>
    </div>
  </template>
  
  <script>
  
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data(){
      return{
        modules : [FreeMode, Navigation, Thumbs]
      }
    }
  };
  </script>