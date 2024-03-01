<template>
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
              <div class="item-detalhe-top">
                <h2>{{ item.titulo }}</h2>
                <span class="material-symbols-outlined">
                  delete
                </span>
              </div>
              <div class="price-amount">
                <p>{{ item.price }}</p>
                <div class="container-amount">
                  <button class="amount-button" @click="decrementAmount">-</button>
                  <input type="tel" :value="amount"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" />
                  <button class="amount-button" @click="amount++">+</button>
                </div>
              </div>
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
</template>
<script>
export default{

}
</script>