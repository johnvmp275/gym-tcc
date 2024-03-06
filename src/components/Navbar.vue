<script setup>
import apiService from '@/js/fetchData'
import CartItem from './widgets/cart/cartItem.vue'
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
            <input type="search" id="search" name="search" placeholder="O que você está procurando hoje?" />
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

          <button type="button" class="button-cart" @click="cartToggleFunction">
            <span class="material-symbols-outlined"> shopping_cart </span>
            <span class="caritem-amount">{{ cartItemCount.length }}</span>
          </button>
        </div>

      </section>
    </nav>
    <CartItem :cartItem="cartItemCount" :cartWasOpen="cartWasOpen" :cartToggleFunction="cartToggleFunction"
      :boxShadowWasOpen="boxShadowWasOpen" />
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
      userLogged: false,
    }
  },
  computed: {
    cartItemCount() {
      return this.$store.state.cartItems;
    },
    cartWasOpen() {
      return this.$store.state.cartWasOpen;
    },
    boxShadowWasOpen() {
      return this.$store.state.boxShadowWasOpen;
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
      const body = document.querySelector('body')
      this.$store.commit('toggleCart');

    }
  },
  watch: {
    cartWasOpen(newValue) {
      const body = document.querySelector('body');
      body.style.overflowY = newValue ? 'hidden' : 'scroll';
    }
  },
  mounted() {
    this.fetchData()
    console.log(this.cartWasOpen);
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
  height: 75px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
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

@media (max-width: 1000px) {
  .navbar-desktop {
    display: none;
  }
}
</style>
