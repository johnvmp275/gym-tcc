<script setup>
import Newslleter from './newslleter/newslleter.vue'
import menuInstitucional from './rodape/menu.vue';
</script>

<template>
  <footer>
    <Newslleter />
    <div class="footer-top">
      <menuInstitucional />
    </div>
    <section class="footer-final">
      <p>
        Vetec | CNPJ: 47.733.562/0001-08 | Av. Paulista, 1000 - São Paulo - SP - Brasil | CEP:
        01310-100 - Todos os Direitos Reservados.
      </p>
      <a class="logo" target="_blank" href="https://github.com/johnvmp275">
        <img src="@/img/vetec.jpg" alt="logo" />
      </a>
    </section>
  </footer>
</template>

<script></script>

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