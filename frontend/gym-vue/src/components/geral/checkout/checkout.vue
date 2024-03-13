<template>
  <header>
    <div>
      <div class="teste">
        <a href="/">
          <img src="@/img/iron.jpg" alt="Logo" />
        </a>
      </div>
    </div>
  </header>
  <template v-if="$route.path === '/checkout/acesso'"> acesso </template>
  <template v-if="$route.path === '/checkout/cadastro'"> cadastro </template>
</template>

<style scoped>
header {
  box-shadow: 0 0 10px 0 black;
  padding: 22px 0;
  margin: 0 auto;
  width: 100%;
}

.teste {
  max-width: 1170px;
  margin: 0 auto;
}

a {
  padding: 0;
}

header a img {
  width: 150px;
}
</style>
