<template>
  <section class="newslleter-container">
    <div class="newslleter-div">
      <div class="newslleter-text">
        <h2>Acompanhe a Iron Forge!</h2>
        <p>Assine nossa newsletter e receba nossas novidades em primeira mão!</p>
      </div>
      <div class="newslleter-inputs">
        <div class="input-div">
          <input type="text" id="name" placeholder="Seu nome" />
        </div>
        <div class="input-div">
          <input type="email" placeholder="Seu melhor email" name="email" id="email" />
        </div>
        <button>Cadastrar</button>
      </div>
    </div>
    <span>Ao se cadastrar você concorda com a nossa <a href="">Política de privacidade</a></span>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.newslleter-container {
  width: 100%;
  max-width: 1170px;
  margin: 30px auto;
  padding: 16px;
}

.newslleter-container span {
  display: flex;
  margin-top: 10px;
  gap: 5px;
  color: var(--background-gray-400);
}

a {
  padding: 0;
  text-decoration: underline;
  color: var(--background-gray-400);
}

.newslleter-text {
  width: 100%;
  max-width: 290px;
  color: var(--background-gray-400);
}

.newslleter-div {
  display: flex;
  gap: 16px;
  align-items: center;
}

.newslleter-inputs {
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: end;
  justify-content: center;
}

.input-div {
  width: 100%;
}

input {
  min-width: 280px;
  border: 2px solid var(--background-gray);
  padding: 10px;
}

button {
  width: 100%;
  background: var(--background-wine);
  font-weight: bold;
  color: var(--background-white);
  display: flex;
  justify-content: center;
  height: 46px;
}

label{
  font-size: 14px;
}

@media (max-width: 1100px) {
  .newslleter-div,
  .newslleter-inputs {
    flex-wrap: wrap;
  }

  span{
    display: flex;
    flex-direction: column;
  }
}
</style>
