<script setup>
import Navbar from './components/geral/menu/menuPrincipal.vue'
import Rodape from './components/geral/rodape.vue'
</script>

<template>
  <template v-if="!$route.path.includes('/checkout') && !$route.path.includes('/painel')">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Rodape />
  </template>
  <template v-else>
    <main>
      <RouterView />
    </main>
  </template>
</template>

<style scoped></style>