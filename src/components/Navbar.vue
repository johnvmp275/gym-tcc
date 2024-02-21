<template>
  <header>
    <nav class="navbar-mobile">
      <section class="middle-top">
        <RouterLink to="/">
          <img src="https://livedemo00.template-help.com/wt_58939/images/logo.png" alt="Logo" />
        </RouterLink>

        <div class="search-route">
          <div class="popup-search" v-show="teste">
            <button class="fake-button" @click="click">
              <span> x </span>
            </button>

            <div>
              <input type="search" id="search" name="search" placeholder="busca" />
            </div>
          </div>

          <button class="fake-button" @click="click">
            <span class="material-symbols-outlined"> search </span>
          </button>

          <div class="user-container">
            <div>user</div>
            <div>user</div>
          </div>

          <button type="button" class="button-cart">
            <span class="material-symbols-outlined"> shopping_cart </span>
          </button>
        </div>
      </section>
      <div class="footer-top">
        <ul>
          <li v-for="(categoria, index) in categories" :key="index">
            <RouterLink :to="categoria.path">
              {{ categoria.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      categories: {},
      teste: false
    }
  },
  methods: {
    async getDadosOfCategories() {
      try {
        const req = await fetch('http://localhost:3000/categoria')
        const data = await req.json()

        this.categories = data

        console.log(this.categories)
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
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 14px;
}

nav a.router-link-active {
  color: var(--background-red);
}

nav a:hover {
  background: var(--background-red);
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

.search-route{
  display: flex;
  height: 100%;
  align-items: center;
}
.search-route a {
  color: var(--background-gray-700);
}

input {
  border: 1px solid var(--background-gray-400);
  color: var(--background-white);
  border-radius: 5px;
}

span {
  cursor: pointer;
}

.popup-search {
  background: var(--background-white);
  position: absolute;
  display: flex;
  align-items: end;
  flex-direction: column;
  border-radius: 8px;
  top: 90px;
  width: 500px;
  height: 200px;
  box-shadow: 0 0 10px 5px var(--background-gray-700);
}

.footer-top {
  display: flex;
  background: #a51416;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.user-container{
  max-width: 300px;
  display: flex;
  gap: 15px;
  align-items: center;
}
</style>
