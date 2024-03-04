<script setup>
import apiService from '@/js/fetchData'
import Vitrine from '@/components/widgets/slider/Vitrine.vue'
import bannerVue from '@/components/widgets/banners/banner.vue'
import Pitchbar from '@/components/widgets/pitchbar/pitchbar.vue'
import loaderVue from '@/components/widgets/loader/loader.vue'
import bannerSecundario from '@/components/widgets/banners/bannerSecundario.vue'
import Instashop from '@/components/instashop/cardInstashop.vue'
</script>

<template>
  <loaderVue :isLoaderActive="loaderActive" />

  <bannerVue :banners="principalBanner" />

  <Pitchbar :pitchbarData="pitchbarHome" />

  <Vitrine :produtosCard="produtos" :getDadosProduto="getDadosProduto" :titulo="titulo" />

  <bannerSecundario :bannerSecundario="secundarioBanner" />

  <Instashop/>
</template>

<script>
export default {
  data() {
    return {
      principalBanner: [],
      secundarioBanner: [
        {
          image: 'https://www.usealphaco.com.br/upload/banner/a77e2e6b11b8d1ab6f97226ca3690509.jpg',
          path: 'suplementos'
        },
        {
          image: 'https://www.usealphaco.com.br/upload/banner/a77e2e6b11b8d1ab6f97226ca3690509.jpg',
          path: 'camisetas'
        }
      ],
      pitchbarHome: [],
      titulo: [],
      produtos: [],
      loaderActive: true
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
        this.titulo = vitrines.vitrine_home01.vitrine.titulo
        this.produtos = vitrines.vitrine_home01.produtos

        this.loaderActive = false
      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
      }
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
