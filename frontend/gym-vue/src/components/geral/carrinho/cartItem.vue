<template>
  <section :class="{ 'cart-container': true, open: cartWasOpen }">
    <div class="carrinho-topo">
      <strong>
        Carrinho de compras (<span class="caritem-amount">{{ cartItem.length }}</span
        >)
      </strong>
      <button type="button" class="button-cart" @click="cartToggleFunction">x</button>
    </div>
    <template v-if="cartItem.length">
      <div class="cart-div">
        <div v-for="(item, index) in cartItem" :key="item.id" class="cart-item">
          <img :src="item.imagem" alt="" />
          <div class="item-detalhe">
            <div class="item-detalhe-top">
              <h2>{{ item.nome }}</h2>
              <button @click="deteleItem(item.id)">
                <span class="material-symbols-outlined"> delete </span>
              </button>
            </div>
            <span class="descricao-product">{{ item.descricao }}</span>
            <div class="price-amount">
              <span class="produto-preco">
                <template v-if="item.preco.de > 0">
                  <span class="preco-por-maior">R${{ item.preco.de }}</span>
                  <strong class="produto-descricao-preco">R${{ item.preco.por }}</strong>
                </template>
                <template v-else>
                  <strong class="produto-descricao-preco">R${{ item.preco.de }}</strong>
                </template>
                <!-- <span class="desconto-vista">{{descontoCalculado}}%</span> -->
              </span>
              <div class="container-amount">
                <button class="amount-button" @click="decrementAmount(index)">-</button>
                <input
                  type="tel"
                  :value="item.qtdProduto"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                />
                <button class="amount-button" @click="acressAmount(index)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="resumo-compra">
        <button class="button-compra">Finalizar Compra</button>
        <button class="button-continuar-compra" @click="cartToggleFunction">
          Continuar comprando
        </button>
      </div>
    </template>

    <template v-else>
      <section class="cart-was-empty">
        <span class="aviso-carrinho-vazio">
          <span class="material-symbols-outlined"> shopping_cart </span>
          <strong>SEU CARRINHO ESTÁ VAZIO</strong>
          <p>
            Navegue agora pelas categorias de nossa loja e escolha os produtos desejados para
            adicionar em seu carrinho de compras
          </p>
        </span>
      </section>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    cartItem: Array,
    cartWasOpen: Boolean,
    cartToggleFunction: Function,
    boxShadowWasOpen: Boolean
  },
  methods: {
    deteleItem(id) {
      // Encontra o id do item no carrinho
      const itemProduct = this.cartItem.findIndex((item) => item.id === id)

      // Remove o item do carrinho
      this.cartItem.splice(itemProduct, 1)

      // Atualiza o localStorage com os itens restantes no carrinho
      localStorage.setItem('cartItems', JSON.stringify(this.cartItem))
    },
    decrementAmount(index) {
      if (this.cartItem[index].qtdProduto > 1) {
        this.cartItem[index].qtdProduto--
        console.log(index, this.cartItem[index].qtdProduto)
        this.updateLocalStorage()
      }
    },
    acressAmount(index) {
      if (this.cartItem[index].qtdProduto < this.cartItem[index].qtdEstoque) {
        this.cartItem[index].qtdProduto++
        console.log(index, this.cartItem[index].qtdProduto)
        this.updateLocalStorage()
      }
    },
    updateLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItem))
    }
  }
}
</script>

<style scoped>
.cart-container {
  height: 100%;
  width: 336px;
  position: fixed;
  transform: translateX(336px);
  top: 0;
  right: 0;
  background: var(--background-white);
  z-index: 999999;
  transition: 0.5s;
}

.cart-container.open {
  transform: translateX(0px);
}

.cart-div {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  height: calc(100% - 226px);
}

.cart-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 2px solid var(--background-gray);
  gap: 16px;
}

.cart-item p {
  font-weight: bold;
  color: var(--background-gray-700);
}

.cart-item img {
  min-width: 66px;
  max-width: 66px;
  height: 66px;
  object-fit: contain;
}

.cart-was-empty {
  height: 100%;
  display: flex;
  align-items: center;
}

h2 {
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 147px;
  overflow: hidden;
}

.item-detalhe {
  width: 100%;
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
  color: var(--background-gray-color);
  gap: 16px;
}

.aviso-carrinho-vazio span {
  font-size: 36px;
}

.carrinho-topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}

.item-detalhe-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-amount {
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
}

.amount-button {
  padding: 16px;
}

.container-amount {
  display: flex;
  min-width: 96px;
  height: 40px;
  border: 1px solid var(--background-gray-400);
}

.container-amount input {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
}

.descricao-product {
  display: block;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.button-continuar-compra {
  width: 100%;
  justify-content: center;
  display: flex;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--background-gray-700);
  border-radius: 6px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.produto-preco{
  display: flex;
  flex-direction: column;
  margin-right: 16px;
}

.preco-por-maior{
  font-size: 12px;
  text-decoration: line-through;
}

.produto-preco strong{
  font-size: 18px;
}
</style>
