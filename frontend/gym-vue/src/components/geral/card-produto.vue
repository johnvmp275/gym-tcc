<template>
  <div class="card-produto">
  <RouterLink class="image-link-product" :to="`/produto/${produto.id}`">
    <img class="image-product-card" :src="produto.image" alt="" />
  </RouterLink>
  <div>
    <Strong class="produto-titulo-card">{{ produto.titulo }}</Strong>
    <p class="produto-descricao-card">{{ produto.descricoes.curta }}</p>
  </div>
    <strong class="produto-descricao-preco">R$ {{ produto.price }}</strong>
    <RouterLink class="detalhe-produto-card" :to="`/produto/${produto.id}`">
      Ver detalhes
    </RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    produto: Object
  }
}
</script>

<style>
.image-product-card {
  object-fit: cover;
  object-position: center;
}

.card-produto{
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
</style>
