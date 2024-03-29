<script setup>
import apiService from '@/components/store/fetchData'
</script>

<template>
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
          <div class="nav-top">

            <img src="@/img/iron.jpg" alt="Logo" />

            <button @click="menuToggleFunction">
              <span class="material-symbols-outlined">
                close
              </span>
            </button>
            <div class="user-container">
              <template v-if="userLogged">
                <a class="menu-login" href="">
                  <span class="material-symbols-outlined">
                    person
                  </span>
                  Olá, Visitante!
                </a>
                <a class="menu-favoritos" href="">
                  <span class="material-symbols-outlined">
                    favorite
                  </span>
                  Favoritos
                </a>
              </template>

              <template v-else>
                <a class="menu-login" href="/checkout/acesso">
                  <span class="material-symbols-outlined">
                    person
                  </span>
                  Entre ou Cadastre-se
                </a>
                <a class="menu-favoritos" href="/checkout/cadastro">
                  <span class="material-symbols-outlined">
                    favorite
                  </span>
                  Favoritos
                </a>
              </template>
            </div>
          </div>
          <div class="header-container-categorias">
            <ul>
              <li v-for="categoria in categoriesData" :key="categoria.id">
                <RouterLink class="link-menu-nv1" :to="`/categorias/${categoria.path}`" @click="menuToggleFunction">
                  {{ categoria.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <button type="button" class="button-cart" @click="cartToggleFunction">
        <span class="material-symbols-outlined"> shopping_cart </span>
        <span class="caritem-amount">{{ cartItemCount.length }}</span>
      </button>

      <div class="search-container">
        <input type="text" id="search" name="search" placeholder="O que você está procurando hoje?"
          v-model="buscaResults" @keydown.enter="searchResults" />
        <button @click="searchResults" class="fake-button">
          <span class="material-symbols-outlined"> search </span>
        </button>
      </div>
    </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      categoriesData: [],
      pitchbarHome: [],
      cartItemCount: [],
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
nav {
  width: 100%;
  background: var(--background-white);
  height: auto;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  z-index: 10;
  border-bottom: 2px solid var(--background-gray);
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

.nav-top {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.nav-top img {
  width: 139px;
  height: auto;
  margin-bottom: 20px;
}

.nav .link-menu-nv1 {
  color: var(--background-gray-700);
}

.nav-top .menu-login {
  background: var(--background-wine);
  color: var(--background-white);
  height: 40px;
  width: 180px;
  padding: 5px;
}

.nav-top .menu-favoritos {
  background: var(--background-white);
  color: var(--background-gray-700);
  height: 40px;
  width: 138px;
  padding: 5px;
  border: 2px solid var(--background-gray);
}


#search {
  color: var(--background-gray-700);
  border-radius: 5px;
  padding: 10px 0 10px 10px;
}

span {
  cursor: pointer;
}

.header-container-categorias {
  display: flex;
}

.user-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 5px;
  align-items: center;
}

.user-container a {
  padding: 0;
  font-size: 12px;
  display: flex;
  justify-content: center;
  gap: 5px;
}

.search-container {
  display: flex;
  width: 100%;
  border: 1px solid var(--background-gray-700);
  border-radius: 8px;
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 120px;
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

.menu-lateral {
  transform: translateX(-1000px);
  position: fixed;
  top: 0;
  left: 0;
  background: var(--background-white);
  height: 100%;
  width: 100%;
  z-index: 100;
  transition: .5s;
}

.menu-lateral.open {
  transform: translateX(0px);
}

.menu-lateral .nav {
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.menu-lateral .nav .header-container-categorias {
  width: 100%;
}

.menu-lateral .nav ul {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.menu-lateral .nav ul a {
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
  .navbar-mobile {
    display: flex;
  }
}
</style>
