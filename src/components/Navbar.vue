<script setup>
import apiService from '@/js/fetchData'
import pitchbar from './widgets/pitchbar.vue'
</script>

<template>
  <header>
    <pitchbar>
      Entre em contato pelo tel: <a href="/#">(18) {{ telWhatsapp }}</a>
    </pitchbar>
    <nav class="navbar-mobile">
      <section class="middle-top">
        <RouterLink class="logo" to="/">
          <img src="@/img/iron.jpg" alt="Logo" />
        </RouterLink>

        <div class="nav">
          <div class="header-container-categorias">
            <ul>
              <li v-for="categoria in categoriesData" :key="categoria.id">
                <RouterLink :to="categoria.path">
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
          </button>
        </div>
      </section>
    </nav>

    <section :class="{ 'cart-container': true, 'open': cartWasOpen }">
      <button type="button" class="button-cart" @click="cartToggleFunction">x</button>
    </section>
    <div class="box-shadow" v-show="boxShadowWasOpen" @click="cartToggleFunction"></div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      categoriesData: [],
      pitchbarHome:[],
      telWhatsapp: '',
      userLogged: false,
      boxShadowWasOpen: false,
      cartWasOpen: false
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

      this.boxShadowWasOpen = !this.boxShadowWasOpen
      this.cartWasOpen = !this.cartWasOpen

      if(this.cartWasOpen === true){
        body.style.overflowY = 'hidden'
      }else{
        body.style.overflowY = 'scroll'
      }
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
  transition: .5s;
}

.cart-container.open {
  transform: translateX(0px);
}

.box-shadow {
  background: var(--background-black);
  opacity: 0.7;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.logo img {
  width: 150px;
}
</style>





