<script setup>
import Newslleter from './newslleter/newslleter.vue'
import menuInstitucional from './rodape/menu.vue'
import apiService from '@/components/store/fetchData'
</script>

<template>
  <footer>
    <Newslleter />
    <div class="footer-top">
      <menuInstitucional />
    </div>
    <section class="footer-final">
      <p>{{ footerInfo }}</p>
      <a class="logo" target="_blank" href="https://github.com/johnvmp275">
        <img src="@/img/vetec.jpg" alt="logo" />
      </a>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      infoSite: {}
    }
  },
  computed:{
    footerInfo(){
      return `${this.infoSite.nome_site} | CNPJ: ${this.infoSite.cnpj} | ${this.infoSite.endereco} | CEP: ${this.infoSite.cep}  - Todos os Direitos Reservados.`;
    }
  },
  methods: {
    async fetchData() {
      const description = await apiService.getDadosOfDescription()
      this.infoSite = description.siteInfo
      console.log(this.infoSite);
    }
  },
  mounted(){
    this.fetchData()
  }
}
</script>

<style scoped>
footer {
  margin-top: 40px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  color: var(--background-gray-700);
  background: var(--background-white);
}

.footer-top {
  padding: 6px 16px;
}

.footer-final {
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.logo {
  padding: 0;
}

.logo img {
  width: 100px;
}

p {
  text-align: center;
}
</style>
