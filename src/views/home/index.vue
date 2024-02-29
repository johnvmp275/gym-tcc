<script setup>
import apiService from '@/js/fetchData'
import Vitrine from '@/components/widgets/slider/Vitrine.vue'
import bannerVue from '@/components/widgets/banners/banner.vue'
import Pitchbar from '@/components/widgets/pitchbar/pitchbar.vue'
</script>

<template>
  <bannerVue :banners="principalBanner"/>

  <Pitchbar :pitchbarData="pitchbarHome"/>

  <Vitrine :produtosCard="produtos" :getDadosProduto="getDadosProduto" :titulo="titulo" />
  
</template>

<script>
export default {
  data() {
    return {
      principalBanner: [],
      pitchbarHome: [],
      titulo: [],
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
        this.titulo = vitrines.vitrine_home01.vitrine.titulo
        this.produtos = vitrines.vitrine_home01.produtos

        console.log(this.titulo);

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