<script setup>
import sliderVue from './sliderComponent.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<template>
  <div class="pitchbar pitchbar-home desktop">
    <div class="pitchbar-container">
      <div class="pitchbar-box" v-for="pitchbar in pitchbarData" :key="pitchbar.id">
        <img :src="pitchbar.icone" :alt="pitchbar.titulo" />
          <span>
            <strong>{{ pitchbar.titulo }}</strong>
            <p>
              {{ pitchbar.texto }}
            </p>
          </span>
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
      class="pitchbar pitchbar-home mobile"
    >
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
  align-items: center;
}

.pitchbar-home span {
  display: flex;
  font-size: 12px;
  height: auto;
  flex-direction: column;
}

.pitchbar-home img {
  width: 30px;
  height: 30px;
}

.pitchbar-home span strong {
  font-size: 16px;
}

.pitchbar-home span p {
  white-space: nowrap;
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

  .pitchbar-home {
    padding: 12px 60px;
  }
}
</style>