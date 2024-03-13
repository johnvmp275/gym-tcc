<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import Vitrine from '@/components/geral/vitrine.vue'
import apiService from '@/components/store/fetchData.js'
import sliderImage from '@/components/geral/sliderImage.vue'
import loaderVue from '@/components/geral/loader.vue'
import Dropdown from '@/components/geral/dropdown.vue'
</script>

<template>
  <main>
    <loaderVue :isLoaderActive="loaderActive" />
    <section class="detalhe-produto container-div">
      <div class="container-produto">
        <sliderImage :slidesPerView="'auto'" class="slider-produto">
          <swiper-slide>
            <img class="image-produto" :src="product.image" alt="" srcset="" />
          </swiper-slide>
          <swiper-slide>
            <img class="image-produto" :src="product.image" alt="" srcset="" />
          </swiper-slide>
          <swiper-slide>
            <img class="image-produto" :src="product.image" alt="" srcset="" />
          </swiper-slide>
          <swiper-slide>
            <img class="image-produto" :src="product.image" alt="" srcset="" />
          </swiper-slide>
          <swiper-slide>
            <img class="image-produto" :src="product.image" alt="" srcset="" />
          </swiper-slide>
          <swiper-slide>
            <img class="image-produto" :src="product.image" alt="" srcset="" />
          </swiper-slide>
        </sliderImage>
        <div>
          <h1>{{ product.titulo }}</h1>
          <span class="produto-descricao">
            <p>{{ descricao.curta }}</p>
            <a href="#descricao" class="ancora-dropdown">Ler mais</a>
          </span>
        </div>
      </div>
      <div class="teste">
        <template v-if="qtdEstoque > 0">
          <span class="produto-preco">R${{ product.price }}</span>
          <div>
            <span>Quantidade:</span>
            <div class="container-amount">
              <button class="amount-button" @click="decrementAmount">-</button>
              <input
                type="tel"
                :value="amount"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              />
              <button class="amount-button" @click="acressAmount">+</button>
            </div>
          </div>
          <button
            class="button-click"
            @click="
              addItemToCard(product.id, product.titulo, product.price, descricao.curta, product.image)
            "
          >
            Adicionar ao carrinho
          </button>
        </template>

        <template v-else>
          <h2>Este produto se encontra indisponível no momento</h2>

          <p class="aviso-produto-email">
            Preencha os campos abaixo para ser informado assim que o produto estiver disponível
            novamente
          </p>

          <input class="input-produto-estoque" type="text" placeholder="Insira seu nome" />
          <input class="input-produto-estoque" type="email" placeholder="exemplo@gmail.com" />

          <button class="button-click">Avise-me</button>
        </template>
      </div>
    </section>

    <section id="descricao">
      <Dropdown titlteDropdown="Descrição do produto">
        <template #dropdown_description>
          <div v-html="descricao.longa"></div>
        </template>
      </Dropdown>

      <Dropdown titlteDropdown="Interações">
        <template #dropdown_description>
          <p>teste</p>
        </template>
      </Dropdown>
    </section>

    <Vitrine
      :produtosCard="produtos"
      :fetchProductDetails="fetchProductDetails"
      :titulo="`Você também pode gostar`"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      produtos: [],
      descricao: {},
      loaderActive: true,
      amount: 1,
      qtdEstoque: 1
    }
  },
  methods: {
    async fetchProductDetails() {
      window.scrollTo({
        top: 0
      })

      try {
        const req = await fetch(`http://localhost:3000/produtos/${this.$route.params.id}`)
        const data = await req.json()
        this.product = data
        this.descricao = data.descricoes
        this.qtdEstoque = data.qtdEstoque

        this.loaderActive = false
      } catch (error) {
        console.error('Não foi possível buscar os dados', error)
      }
    },
    async fetchData() {
      try {
        const vitrines = await apiService.getDadosOfVitrines()
        this.vitrine_home01 = vitrines.vitrine_home01
        this.produtos = vitrines.vitrine_home01.produtos
      } catch (error) {
        console.error('Não foi possivel buscar os dados pedidos', error)
      }
    },
    decrementAmount() {
      if (this.amount >= 2) {
        this.amount--
      }
    },
    acressAmount() {
      if (this.amount !== this.qtdEstoque) {
        this.amount++
      }
    },
    addItemToCard(id, titulo, preco, descricao, imagem) {
      const itemWasAdd = this.$store.state.cartItems.find((item) => item.id === id)

      if (!itemWasAdd) {
        const item = {
          id: id,
          nome: titulo,
          preco: preco,
          descricao: descricao,
          imagem: imagem
        }

        this.$store.commit('addToCart', item)
        localStorage.setItem('cartItems', JSON.stringify(this.$store.state.cartItems))
      }

      this.$store.commit('toggleCart')
    }
  },
  watch: {
    '$route.params.id': {
      emit: true,
      handler(produtoEscolhido) {
        this.fetchProductDetails()
      }
    }
  },
  mounted() {
    this.fetchProductDetails()
    this.fetchData()
  }
}
</script>

<style scoped>
.detalhe-produto {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1330px;
  gap: 16px;
  margin: 0 auto;
}

.image-produto {
  min-width: 370px;
  max-width: 370px;
  height: 370px;
  object-fit: scale-down;
}

.produto-descricao {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 10px;
  height: 100%;
}

.produto-descricao p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.ancora-dropdown {
  padding: 0;
  text-decoration: underline;
  font-weight: bold;
  color: var(--background-wine);
}

div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.slider-produto {
  min-width: 370px;
  max-width: 370px;
}

.container-produto {
  flex-direction: row;
  gap: 10px;
  padding: 16px;
}

.teste {
  max-width: 362px;
  width: 100%;
  padding: 16px;
  display: flex;
  margin: 0 auto;
}

.produto-preco {
  font-weight: bold;
  font-size: 24px;
}

h1 {
  font-size: 20px;
}

.amount-button {
  padding: 16px;
}

.container-amount {
  display: flex;
  flex-direction: row;
  border: 1px solid var(--background-gray-400);
}

.container-amount input {
  width: 35px;
  display: flex;
  text-align: center;
}

#descricao {
  margin: 40px auto;
  padding: 16px;
  max-width: 1330px;
}

.input-produto-estoque {
  border: 2px solid var(--background-gray);
  padding: 10px;
}

@media (max-width: 1000px) {
  .detalhe-produto,
  .container-produto {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }

  h1 {
    font-size: 26px;
  }

  .image-produto {
    min-width: 300px;
    max-width: 300px;
    height: 300px;
  }

  .slider-produto {
    min-width: 300px;
    max-width: 300px;
  }
}
</style>