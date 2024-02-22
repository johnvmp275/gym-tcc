<script setup>
import pitchbar from './widgets/pitchbar.vue'
</script>

<template>
  <header>
    <pitchbar>
      Entre em contato pelo tel: <a href="/teste">(18) {{ telWhatsapp }}</a>
    </pitchbar>
    <nav class="navbar-mobile">
      <section class="middle-top">
        <RouterLink to="/">
          <img src="https://livedemo00.template-help.com/wt_58939/images/logo.png" alt="Logo" />
        </RouterLink>

        <div class="nav">
          <div class="header-container-categorias">
            <ul>
              <li v-for="(categoria, index) in categories" :key="index">
                <RouterLink :to="categoria.path">
                  {{ categoria.label }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <div class="search-container">
            <input type="text" id="search" name="search" placeholder="busca" />
            <button class="fake-button">
              <span class="material-symbols-outlined"> search </span>
            </button>
          </div>

          <div class="user-container">
            <template v-if="userLogged"> logado </template>

            <template v-else>
              <p>Olá, Visitante!</p>
              <a href="">Entre</a>
              ou
              <a href="">Cadastre-se</a>
            </template>
          </div>

          <button type="button" class="button-cart" @click="click">
            <span class="material-symbols-outlined"> shopping_cart </span>
          </button>
        </div>
      </section>
    </nav>

    <section :class="{ 'cart-container': true, open: teste }"></section>
    <div class="box-shadow" v-show="teste"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      rotes: [],
      categories: [],
      teste: false
    }
  },
  computed: {
    telWhatsapp() {
      // this.rotes.find((item) => item.social)
      // this.telWhatsapp = this.rotes.social.map(social => social.whatsapp)
      return '99999-9999'
    }
  },
  methods: {
    async getDadosOfCategories() {
      try {
        const req = await fetch('http://localhost:3000/rotes')
        const data = await req.json()

        this.rotes = data
        this.categories = data.find((item) => item.categories)
      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
      }
    },
    click() {
      this.teste = !this.teste
    }
  },
  mounted() {
    this.getDadosOfCategories()
  }
}
</script>

<style scoped>
header {
  z-index: 10;
  position: sticky;
  width: 100%;
  left: 0;
  top: 0;
}
nav {
  width: 100%;
  height: 75px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin: 0 auto;
  z-index: 10;
}

a {
  color: var(--background-white);
}

li a {
  color: var(--background-white);
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 14px;
}

nav a.router-link-active {
  color: var(--background-red);
}

nav a:hover {
  color: var(--background-red);
}

.middle-top {
  background: var(--background-white);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}

.nav {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 8px;
}
.nav a {
  color: var(--background-gray-700);
}

input {
  color: var(--background-gray-700);
  border-radius: 5px;
  padding: 10px 0 10px 10px;
}

span {
  cursor: pointer;
}

.popup {
  background: var(--background-white);
  position: absolute;
  display: flex;
  align-items: end;
  flex-direction: column;
  border-radius: 8px;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 200px;
  box-shadow: 0 0 10px 5px var(--background-gray-700);
  padding: 16px;
}

.footer-top {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.header-container-categorias {
  display: flex;
}

.user-container {
  max-width: 167px;
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.user-container a {
  padding: 0;
  text-decoration: underline;
  font-weight: bold;
}
.search-container {
  display: flex;
  width: 100%;
  border: 1px solid var(--background-gray-700);
  border-radius: 8px;
}

.cart-container {
  height: 100vh;
  width: 300px;
  position: fixed;
  transform: translateX(300px);
  top: 0;
  right: 0;
  background: var(--background-white);
  z-index: 20;
}

.cart-container.open {
  transform: translateX(0px);
}

.box-shadow {
  background: var(--background-gray-400);
  opacity: 0.6;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
