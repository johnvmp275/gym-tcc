<script setup>
import apiService from '@/components/store/fetchData'
</script>

<template>
  <!-- Verifica se o array do instashop possui itens -->
  <section v-if="instashop.length">
    <div class="insta-topo">
      <h2>Instashop</h2>
      <a>@IronForge</a>
    </div>
    <div class="instagram-post">
      <!-- Adiciona um limit ao puxar as imagens -->
      <a
        class="insta-posts"
        v-for="card in instashop.slice(0, 6)"
        :key="card.id"
        :href="card.link"
        target="blank"
      >
        <img :src="card.image" :alt="card.label" />
        <span class="material-symbols-outlined insta-hover"> exercise </span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      instashop: []
    }
  },
  methods: {
    async fetchData() {
      try {
        const instashopData = await apiService.getDadosOfInstashop()
        this.instashop = instashopData
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

<style scoped>
section {
  max-width: 1170px;
  margin: 0 auto;
}

.insta-posts {
  margin: 0 auto;
}

.insta-posts:nth-child(1) {
  grid-area: imgA;
  max-width: 370px;
  height: 370px;
}

.insta-posts:nth-child(2) {
  grid-area: imgB;
  max-width: 370px;
  height: 370px;
}

.insta-posts:nth-child(3) {
  grid-area: imgC;
  max-width: 170px;
  max-height: 170px;
}

.insta-posts:nth-child(4) {
  grid-area: imgD;
  max-width: 170px;
  max-height: 170px;
}

.insta-posts:nth-child(5) {
  grid-area: imgE;
  max-width: 170px;
  max-height: 170px;
}

.insta-posts:nth-child(6) {
  grid-area: imgF;
  max-width: 170px;
  max-height: 170px;
}

a {
  position: relative;
  display: flex;
  padding: 0;
}

.instagram-post img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.instagram-post {
  display: grid;
  padding: 16px;
  width: 100%;
  justify-content: center;
  grid-template-areas:
    'imgA   imgB   imgC imgE'
    'imgA   imgB   imgD imgF';
  gap: 17px;
}

.insta-hover {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  transition: 0.5s;
  justify-content: center;
  align-items: center;
  color: var(--background-white);
  background: rgba(26, 60, 88, 0.4);
  border-radius: 10px;
  opacity: 0;
  z-index: 5;
  font-size: 80px;
}

.insta-topo {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 30px 0;
}

h2 {
  margin: 0 auto;
}

a:hover .insta-hover {
  opacity: 1;
}

@media (max-width: 1100px) {
  .instagram-post {
    display: grid;
    grid-template-areas:
      'imgA imgA'
      'imgB imgB'
      'imgC imgD'
      'imgE imgF';
    grid-row-gap: 17px;
    grid-column-gap: 10px;
  }
  .insta-topo {
    flex-direction: column;
  }
}
</style>
