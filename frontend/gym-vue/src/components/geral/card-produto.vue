<template>
  <div class="card-produto">
    <RouterLink class="image-link-product" :to="`/produto/${produto.id}`">
      <img class="image-product-card" :src="produto.image" alt="" />
    </RouterLink>
    <div>
      <Strong class="produto-titulo-card">{{ produto.titulo }}</Strong>
      <p class="produto-descricao-card">{{ produto.descricoes.curta }}</p>
    </div>
    <div v-if="starAvaliation">
      <svg
        v-for="index in starAvaliation"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="#FFF"
        :key="index"
      >
        <g clip-path="url(#clip0_121_1599)">
          <path
            d="M5 0.244629L6.52833 3.39796L10 3.87755L7.47333 6.30588L8.09 9.75546L5 8.10255L1.90958 9.75546L2.52667 6.30588L0 3.87755L3.47167 3.39796L5 0.244629Z"
            fill="#F5EC13"
        />
        </g>
        <defs>
          <clipPath id="clip0_121_1599">
            <rect width="10" height="10" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>

    <span class="produto-preco">
      <template v-if="produto.price.de > 0">
        <span class="preco-por-maior">R${{ produto.price.de }}</span>
        <strong class="produto-descricao-preco">R${{ produto.price.por }}</strong>
      </template>
      <template v-else>
        <strong class="produto-descricao-preco">R${{ produto.price.de }}</strong>
      </template>
      <!-- <span class="desconto-vista">{{descontoCalculado}}%</span> -->
    </span>

    <RouterLink class="detalhe-produto-card" :to="`/produto/${produto.id}`">
      Ver detalhes
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    produto: Object
  },
  data() {
    return {
      starAvaliation: 5
    }
  }
}
</script>

<style>
.image-product-card {
  object-fit: cover;
  object-position: center;
}

.card-produto {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.produto-descricao-card,
.produto-titulo-card {
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

.produto-descricao-card {
  font-size: 14px;
}

.detalhe-produto-card {
  background: var(--background-wine);
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--background-white);
  font-size: 16px;
  font-weight: bold;
}

.detalhe-produto-card:hover {
  background: var(--background-red);
}

.image-link-product {
  margin: 0 auto;
}

.produto-descricao-preco {
  font-size: 25px;
  color: var(--background-gray-700);
}

.card-produto .produto-preco{
  display: flex;
  margin-right: 16px;
  align-items: baseline;
  gap: 5px;
}

.card-produto .preco-por-maior{
  font-size: 16px;
  text-decoration: line-through;
}

.card-produto .produto-preco strong{
  font-size: 24px;
}

</style>
