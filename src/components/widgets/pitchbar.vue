<script setup>
import sliderVue from './slider/SliderComponent.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<template>
  <div class="pitchbar pitchbar-home desktop">
    <div class="pitchbar-container">
      <div class="pitchbar-box" v-for="pitchbar in pitchbarData" :key="pitchbar.id">
        <img :src="pitchbar.icone" :alt="pitchbar.titulo" />
        <p>
          <strong>{{ pitchbar.titulo }}</strong>
          {{ pitchbar.texto }}
        </p>
      </div>
    </div>
  </div>
  <div>
    <sliderVue 
    :spaceBetween="40" 
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }" 
    :loop="true" 
    :slidesPerView="'auto'" 
    class="pitchbar pitchbar-home mobile">
      <swiper-slide v-for="pitchbar in pitchbarData" :key="pitchbar.id">
        <div class="pitchbar-box">
          <img :src="pitchbar.icone" :alt="pitchbar.titulo" />
          <p>
            <strong>{{ pitchbar.titulo }}</strong>
            {{ pitchbar.texto }}
          </p>
        </div>
      </swiper-slide>
    </sliderVue>
  </div>
</template>

<script>
export default {
  props: {
    pitchbarData: Array
  }
}
</script>

<style scoped>
.pitchbar-home {
  justify-content: space-around;
  padding: 32px 80px;
}

.pitchbar-home div {
  display: flex;
  gap: 16px;
}

.pitchbar-home p {
  display: flex;
  font-size: 12px;
  height: 40px;
  flex-direction: column;
}

.pitchbar-home p strong {
  font-size: 16px;
}

.mobile {
  display: none;
}

@media (max-width: 1200px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }
}
</style>

