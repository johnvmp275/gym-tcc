<script setup>
import Navbar from './components/geral/menu/menuPrincipal.vue'
import Rodape from './components/geral/rodape.vue'
</script>

<template>
  <template v-if="!$route.path.includes('/checkout') && !$route.path.includes('/painel')">
    <Navbar />
      <RouterView />
    <Rodape />
  </template>
  <template v-else>
      <RouterView />
  </template>
</template>

<style scoped></style>