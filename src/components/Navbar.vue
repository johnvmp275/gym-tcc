<script setup>
import apiService from '@/js/fetchData'
import CartItem from './widgets/cart/cartItem.vue'
import { useRouter } from 'vue-router'
</script>

<template>
  <header>
    <div class="pitchbar">
      <span>
        Entre em contato pelo tel: <a href="/#">(18) {{ telWhatsapp }}</a>
      </span>
    </div>
    <nav class="navbar-desktop">
      <section class="middle-top">
        <RouterLink class="logo" to="/">
          <img src="@/img/iron.jpg" alt="Logo" />
        </RouterLink>

        <div class="nav">
          <div class="header-container-categorias">
            <ul>
              <li v-for="categoria in categoriesData" :key="categoria.id">
                <RouterLink :to="`/categorias/${categoria.path}`">
                  {{ categoria.label }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <div class="search-container">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="O que você está procurando hoje?"
              v-model="buscaResults"
              @keydown.enter="searchResults"
            />
            <button @click="searchResults" class="fake-button">
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

          <button type="button" class="button-cart" @click="cartToggleFunction">
            <span class="material-symbols-outlined"> shopping_cart </span>
            <span class="caritem-amount">{{ cartItemCount.length }}</span>
          </button>
        </div>
      </section>
    </nav>
    <nav class="navbar-mobile">
      <section class="middle-top">
        <button @click="menuToggleFunction">
          <span class="material-symbols-outlined"> menu </span>
        </button>

        <RouterLink class="logo" to="/">
          <img src="@/img/iron.jpg" alt="Logo" />
        </RouterLink>

        <section :class="{ 'menu-lateral': true, open: menuWasOpen }">
          <div class="nav">
            <button @click="menuToggleFunction">x</button>
            <div class="header-container-categorias">
              <ul>
                <li v-for="categoria in categoriesData" :key="categoria.id">
                  <RouterLink :to="`/categorias/${categoria.path}`">
                    {{ categoria.label }}
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class="user-container">
              <!-- <template v-if="userLogged"> logado </template>
  
              <template v-else>
                <p>Olá, Visitante!</p>
                <a href="">Entre</a>
                ou
                <a href="">Cadastre-se</a>
              </template> -->
            </div>
  
          </div>
        </section>

        <button type="button" class="button-cart" @click="cartToggleFunction">
          <span class="material-symbols-outlined"> shopping_cart </span>
          <span class="caritem-amount">{{ cartItemCount.length }}</span>
        </button>

        <div class="search-container">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="O que você está procurando hoje?"
            v-model="buscaResults"
            @keydown.enter="searchResults"
          />
          <button @click="searchResults" class="fake-button">
            <span class="material-symbols-outlined"> search </span>
          </button>
        </div>
      </section>
    </nav>
    <CartItem
      :cartItem="cartItemCount"
      :cartWasOpen="cartWasOpen"
      :cartToggleFunction="cartToggleFunction"
      :boxShadowWasOpen="boxShadowWasOpen"
    />
    <div class="box-shadow" v-show="boxShadowWasOpen" @click="cartToggleFunction"></div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      categoriesData: [],
      pitchbarHome: [],
      cartItemCount: [],
      telWhatsapp: '',
      buscaResults: '',
      userLogged: false,
    }
  },
  computed: {
    cartItemCount() {
      return this.$store.state.cartItems
    },
    cartWasOpen() {
      return this.$store.state.cartWasOpen
    },
    menuWasOpen() {
      return this.$store.state.menuWasOpen
    },
    boxShadowWasOpen() {
      return this.$store.state.boxShadowWasOpen
    }
  },
  methods: {
    async fetchData() {
      try {
        const menus = await apiService.getDadosOfMenus()
        this.categoriesData = menus.find((item) => item.menu_home).menu_home
        this.pitchbarHome = menus.find((item) => item.pitchbar_home).pitchbar_home

        const description = await apiService.getDadosOfDescription()
        this.telWhatsapp = description.find((item) => item.social).social[0].whatsapp
      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
      }
    },
    cartToggleFunction() {
      this.$store.commit('toggleCart')
    },
    menuToggleFunction() {
      this.$store.commit('toggleMenu')
    },
    searchResults() {
      if (this.buscaResults !== '') {
        const encodedSearchTerm = encodeURIComponent(this.buscaResults)
        this.$router.push({ path: '/busca', query: { busca: encodedSearchTerm } })
      }
      this.buscaResults = ''
    },
    teste(){
      this.menuWasOpen = !this.menuWasOpen
    }
  },
  watch: {
    cartWasOpen(newParams) {
      const body = document.querySelector('body')
      body.style.overflowY = newParams ? 'hidden' : 'scroll'
    },
    menuWasOpen(newParams) {
      const body = document.querySelector('body')
      body.style.overflowY = newParams ? 'hidden' : 'scroll'
    }
  },
  mounted() {
    this.fetchData()
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

.pitchbar span {
  max-width: 1330px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.pitchbar {
  display: flex;
  align-items: center;
}

nav {
  width: 100%;
  background: var(--background-white);
  height: auto;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  z-index: 10;
}

.navbar-mobile {
  display: none;
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
  height: 100%;
  width: 100%;
  max-width: 1330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  margin: 0 auto;
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

#search {
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
  max-width: 177px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
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

.logo {
  padding: 10px 0;
  margin-right: 20px;
}

.logo img {
  width: 150px;
}

.button-cart {
  position: relative;
}

.caritem-amount {
  position: absolute;
  bottom: 5px;
  right: 0;
  width: 20px;
  height: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--background-red);
  color: var(--background-white);
}

.header-container-categorias a {
  padding: 10px 5px;
}

.navbar-mobile .middle-top {
  flex-wrap: wrap;
}

.menu-lateral{
  transform: translateX(-500px);
  position: fixed;
  top: 0;
  left: 0;
  background: var(--background-white);
  height: 100%;
  width: 100%;
  z-index: 100;
  transition: .5s;
}

.menu-lateral.open{
  transform: translateX(0px);
}

.menu-lateral .nav{
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.menu-lateral .nav .header-container-categorias{
  width: 100%;
}

.menu-lateral .nav ul{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.menu-lateral .nav ul a{
  width: 100%;
  height: 51px;
}

.box-shadow {
  background: var(--background-black);
  opacity: 0.7;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

@media (max-width: 1000px) {
  .navbar-desktop {
    display: none;
  }
  .navbar-mobile {
    display: flex;
  }
}
</style>
