<template>
  <div v-if="redirectLoader">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  props: {
    redirectLoader: Boolean
  }
}
</script>

<style scoped>
.loader {
  margin: 0 auto;
  width: 120px;
  padding: 15px;
  background: var(--background-wine);
  aspect-ratio: 1;
  border-radius: 50%;
  --_m: conic-gradient(#0000, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  box-sizing: border-box;
  animation: load 1s linear infinite;
}

@keyframes load {
  to {
    transform: rotate(1turn);
  }
}

div {
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  /* background: var(--background-black); */
}
</style>
