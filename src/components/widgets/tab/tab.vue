<template>
  <div class="tabs">
    
    <ul>
      <li @click="selectTab(1)">Detalhe do Produto</li>
      <li @click="selectTab(2)">Avaliações</li>
      <li @click="selectTab(3)">Perguntas e Respostas</li>
    </ul>
    <section v-if="table == 1">
      <slot />
    </section>

    <section v-if="table == 2">
    
    </section>

    <section v-if="table == 3">
    
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      table: 1
    }
  },
  methods: {
    selectTab(value) {
      this.table = value
    }
  }
}
</script>

<style scoped>
ul {
  gap: 16px;
}
li {
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;
  font-size: 18px;
}
</style>
