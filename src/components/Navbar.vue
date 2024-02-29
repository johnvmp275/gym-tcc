<script setup>
import apiService from '@/js/fetchData'
</script>

<template>
  <header>
    <div class="pitchbar">
      Entre em contato pelo tel: <a href="/#">(18) {{ telWhatsapp }}</a>
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
      <div class="carrinho-topo">
        <strong>Carrinho de compras</strong>
        <button type="button" class="button-cart" @click="cartToggleFunction">x</button>
      </div>
      <template v-if="cartItem.length">
        <div class="cart-div">
          <div v-for="item in cartItem" :key="item.id" class="cart-item">
            <img :src="item.image" alt="">
            <div class="item-detalhe">
              <h2>{{ item.titulo }}</h2>
              <p>{{ item.price }}</p>
            </div>
          </div>
        </div>
        <div class="resumo-compra">
          <button class="button-compra">
            Finalizar Compra
          </button>
        </div>
      </template>
      <template v-else>
        <span class="aviso-carrinho-vazio">
          <strong>SEU CARRINHO ESTÁ VAZIO</strong>
          <p>Navegue agora pelas categorias de nossa loja e escolha os produtos desejados para adicionar em seu carrinho
            de
            compras
          </p>
        </span>
      </template>
    </section>
    <div class="box-shadow" v-show="boxShadowWasOpen" @click="cartToggleFunction"></div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      categoriesData: [],
      pitchbarHome: [],
      cartItem: [
        {
          "titulo": "KIt de Short X8",
          "id": 1,
          "image": "https://www.usealphaco.com.br/upload/lista-compra/imagem/b_kit-diverso-dry-fit-3-camisetas-2-bermudas.webp",
          "price": "120,00",
          "descricoes": {
            "curta": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet.",
            "longa": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet."
          }
        },
        {
          "titulo": "KIt de Camisetas X8",
          "id": 2,
          "image": "https://www.usealphaco.com.br/upload/lista-compra/imagem/b_kit-diverso-dry-fit-3-camisetas-2-bermudas.webp",
          "price": "300,00",
          "descricoes": {
            "curta": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet.",
            "longa": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet."
          }
        },
        {
          "titulo": "Camiseta",
          "id": 3,
          "image": "https://www.usealphaco.com.br/upload/produto/imagem/m_tshirt-dry-perfomance-black-alpha-co.webp",
          "price": "80,00",
          "descricoes": {
            "curta": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet.",
            "longa": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet."
          }
        },
        {
          "titulo": "Kit de 8X Camiseta",
          "id": 4,
          "image": "https://www.usealphaco.com.br/upload/produto/imagem/m_kit-6-camisetas-pretas-de-treino.jpg",
          "price": "50,00",
          "descricoes": {
            "curta": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet.",
            "longa": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet."
          }
        },
        {
          "titulo": "Kit de Camiseta",
          "id": 5,
          "image": "https://www.usealphaco.com.br/upload/produto/imagem/m_kit-campe-o-as-camisetas-dry-mais-vendidas-2.jpg",
          "price": "200,00",
          "descricoes": {
            "curta": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet.",
            "longa": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet. Quisque eleifend diam ac nulla eleifend, ac dignissim eros varius. Praesent sagittis non purus eu luctus. In consequat, nisl vitae congue elementum, eros est aliquam lectus, sit amet ullamcorper dolor arcu non nisl. Aliquam erat volutpat. Nam sed fringilla enim. Aliquam neque lorem, vestibulum sed ullamcorper et, tempus at lectus. Fusce pretium efficitur purus, sed lacinia mi dignissim in. Ut pellentesque elit eu orci dictum, nec dapibus ligula placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut aliquam neque, quis feugiat mi. Donec id tortor elit. Aliquam turpis sapien, ullamcorper eget est quis, placerat aliquam dolor. Quisque pharetra ante vitae lacus aliquam fringilla. Aliquam erat volutpat. Nam quam ipsum, fringilla at dui quis, pulvinar egestas elit. Fusce maximus, ante in tempor ullamcorper, sem velit blandit tortor, et euismod elit nisi vel purus. Praesent ut laoreet mi. Sed tristique massa ac ornare pretium. Pellentesque porttitor nunc non augue auctor, ut rutrum tortor tempor. Fusce fermentum libero erat, a dictum neque volutpat sit amet."
          }
        }
      ],
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

      if (this.cartWasOpen === true) {
        body.style.overflowY = 'hidden'
      } else {
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
  width: 336px;
  position: fixed;
  transform: translateX(336px);
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
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.logo img {
  width: 150px;
}

.cart-div {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  gap: 10px;
  height: 70%;
}

.cart-item {
  display: flex;
  padding: 10px;
  border: 2px solid var(--background-gray);
  gap: 16px;
}

.cart-item img {
  min-width: 110px;
  max-width: 110px;
  height: 110px;
  object-fit: cover;
}

h2 {
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;
  overflow: hidden;
}

.item-detalhe {
  width: 152px;
}

.button-compra {
  display: flex;
  background: var(--background-wine);
  width: 100%;
  padding: 16px;
  color: var(--background-white);
  justify-content: center;
}

.resumo-compra {
  padding: 16px;
}

.aviso-carrinho-vazio {
  display: flex;
  flex-direction: column;
  padding: 16px;
  text-align: center;
}

.carrinho-topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}

@media (max-width : 1200px) {
  .navbar-desktop {
    display: none;
  }
}
</style>