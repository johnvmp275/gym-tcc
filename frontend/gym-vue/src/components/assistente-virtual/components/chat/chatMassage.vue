<script setup>
import loaderMessage from '../loader/loaderMessage.vue'
</script>

<template>
  <div id="chat-message">
    <!-- imprime o texto do usuário e assistente -->
    <div
      v-for="response in mergedResponsesChat"
      :key="response.id"
      :class="[response.type + '-container-message']"
    >
      <p :class="['resposta-massage', response.from]">

        <span v-html="response.message"></span>
        <span class="message-hr">
            {{ response.enviadoEm }}
        </span>
        
      </p>

    </div>

    <loaderMessage 
    :messageLoader="messageLoader" 
    />

  </div>
</template>

<script>
export default {
  props: {
    mergedResponsesChat: [],
    messageLoader: Boolean
  }
}
</script>

<style scoped>
#chat-message {
  width: 100%;
  height: 200px;
  padding: 0 16px;
  overflow-y: auto;
  margin-bottom: 10px;
  position: relative;
}

.user-container-message {
  width: 100%;
  display: flex;
  justify-content: end;
}

.assistente-container-message {
  width: 100%;
  display: flex;
}

.user-resposta {
  background: var(--background-wine);
  color: var(--background-white);
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

.message-hr {
  font-size: 11px;
  display: flex;
  margin-top: 5px;
  justify-content: end;
}

.loading {
  max-width: 150px;
  text-align: center;
}

@keyframes popAnimation {
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }

  30% {
    opacity: 1;
    transform: scale(1.1, 1.1);
  }

  80% {
    transform: scale(1, 1);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

@media (max-width: 500px) {
  #chat-message {
    height: calc(100% - 104px);
  }
}
</style>
