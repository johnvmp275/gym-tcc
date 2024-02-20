<template>
  <nav>
    <div class="middle-top">
      <RouterLink to="/"><img src="" alt="Logo" /></RouterLink>
      <input type="search" id="search" name="search" placeholder="busca"/>
      <div class="user-container">teste</div>
      <button type="button">
        <span class="material-symbols-outlined"> shopping_cart </span>
      </button>
    </div>
    <div class="footer-top">
      <RouterLink to="/">teste</RouterLink>
    </div>
  </nav>
</template>

<script>
export default{
    data(){
        return{
            categories: []
        }
    }
}
</script>

<style scoped>
nav {
  width: 100%;
  min-height: 76px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

div {
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}

a {
  color: var(--background-white);
}

.middle-top {
  background: var(--background-orange);
}

.footer-top {
  background: red;
}

input{
    background: var(--background-white);
}
</style>
