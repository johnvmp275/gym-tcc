<template>
    <div class="assistente-container-message">
        <p></p>
        <span>{{ contador }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 5
        };
    },
    mounted() {
        this.intervalo = setInterval(() => {
            if (this.contador > 0) {
                this.contador--;
            }
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.intervalo);
    }
};
</script>

<style scoped>

.assistente-container-message {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.assistente-resposta {
  background: rgb(238, 238, 238);
  color: var(--background-gray-400);
}

.resposta-massage {
  width: auto;
  padding: 15px 26px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-bottom: 20px;
  max-width: 340px;
  min-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  animation: popAnimation 0.5s forwards;
}
</style>