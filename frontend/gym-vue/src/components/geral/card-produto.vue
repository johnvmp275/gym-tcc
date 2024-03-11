<template>
        <RouterLink class="image-link-product" :to="`/produto/${produto.id}`">
            <img class="image-product-card" :src="produto.image" alt="" />
        </RouterLink>
        <Strong class="produto-titulo-card">{{ produto.titulo }}</Strong>
        <p class="produto-descricao-card">{{ produto.descricoes.curta }}</p>
        <strong>{{ produto.price }}</strong>
        <RouterLink class="detalhe-produto-card" :to="`/produto/${produto.id}`">
            Ver detalhes
        </RouterLink>
</template>

<script>
export default{
    props:{
        produto: Object
    }
}
</script>

<style>
.image-product {
  object-fit: cover;
  object-position: center;
}

.produto-descricao-card,
.produto-titulo-card {
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  background: red;
}

.image-link-product{
  margin: 0 auto;
}
</style>