<template>
  <section>
    <div v-for="banner in bannerSecundario" :key="banner.id">
      <RouterLink :to="`/categorias/${banner.path}`">
        <img :src="banner.image" :alt="banner.titulo" />
      </RouterLink> 
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bannerSecundario: Array
  }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  max-width: 1170px;
  padding: 16px;
  margin: 0 auto;
  gap: 16px;
}

section div {
  max-width: 100%;
  overflow: hidden;
  cursor: pointer;
}

div img {
  max-width: 100%;
  transition: 0.8s;
  height: auto;
  object-fit: cover;
  object-position: center;
}

img:hover {
  scale: 1.3;
}

a{
    padding: 0;
}

@media (max-width: 1000px) {
  section {
    flex-wrap: wrap;
  }
}
</style>
