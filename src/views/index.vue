<script setup>
import sliderVue from '@/components/widgets/SliderComponent.vue'
import apiService from '@/js/fetchData'
import { Swiper, SwiperSlide } from 'swiper/vue'
import pitchbarVue from '@/components/widgets/pitchbar.vue'
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
    v-if="principalBanner.length"
  >
    <swiper-slide v-for="banner in principalBanner" :key="banner.id">
      <img :src="banner.link" :alt="banner.label" />
    </swiper-slide>
  </sliderVue>

  <pitchbarVue class="pitchbar-home">
    <div class="pitchbar-container">
      <div class="pitchbar-box" v-for="pitchbar in pitchbarHome" :key="pitchbar.id">
        <img :src="pitchbar.icone" :alt="pitchbar.titulo" />
        <p>
          <strong>{{ pitchbar.titulo }}</strong>
          {{ pitchbar.texto }}
        </p>
      </div>
    </div>
  </pitchbarVue>

  <section class="vitrine-home">
    <h1 class="vitrine-titulo">{{}}</h1>

    <sliderVue :slidesPerView="'auto'" :spaceBetween="10" v-if="produtos.length">
      <swiper-slide v-for="produto in produtos" :key="produto.id" class="card-product">
        <a href="#" @click="getDadosProduto(produto)"
          ><img class="image-product" :src="produto.image" alt=""
        /></a>
        <Strong class="produto-titulo">{{ produto.titulo }}</Strong>
        <p class="produto-descricao">{{ produto.descricoes.curta }}</p>
        <strong>{{ produto.price }}</strong>
        <a class="detalhe-produto" href="#" @click="getDadosProduto(produto)">Ver detalhes</a>
      </swiper-slide>
    </sliderVue>
  </section>
</template>

<script>
export default {
  data() {
    return {
      principalBanner: [],
      pitchbarHome: [],
      vitrine_home01: [],
      produtos: []
    }
  },
  methods: {
    async fetchData() {
      try {
        const banners = await apiService.getDadosOfBanner()
        this.principalBanner = banners.find((item) => item.bannerPrincipal).bannerPrincipal

        const menus = await apiService.getDadosOfMenus()
        this.pitchbarHome = menus.find((item) => item.pitchbar_home).pitchbar_home

        const vitrines = await apiService.getDadosOfVitrines()
        this.vitrine_home01 = vitrines.vitrine_home01
        this.produtos = vitrines.vitrine_home01.produtos

        console.log(this.produtos)
      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
      }
    },
    getDadosProduto(produto) {
      console.log(produto)
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>
.pitchbar-home {
  justify-content: space-around;
  padding: 32px 80px;
}

.pitchbar-container {
  max-width: 1330px;
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

h1 {
  text-align: center;
  font-size: 25px;
  margin-bottom: 15px;
}

.card-product {
  border: 2px solid var(--background-gray);
  padding: 10px;
  width: 320px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.image-product {
  width: 100%;
  height: 270px;
  object-fit: cover;
  object-position: center;
}

.vitrine-home {
  padding: 16px;
  max-width: 1330px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.produto-descricao,
.produto-titulo {
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.detalhe-produto {
  background: var(--background-wine);
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--background-white);
}
</style>
