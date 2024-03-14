<template>
  <div
    :class="{ 'assistente-button': true, open: chatWasOpen, closed: chatBotOpen }"
    @click="toggleChatBot"
  >
    <img src="@/img/atendente.png" alt="assitente botão" />
    <!-- <img src="https://cdn.leadster.com.br/neurolead/img/avatar/12.png" alt="assitente botão" /> -->
  </div>
  <div :class="{ 'chat-container': true, open: chatBotOpen, closed: chatWasOpen }">
    <div class="chat-header">
      <div class="assistente-icon">
        <img src="@/img/atendente.png" alt="assitente botão" />
        <!-- <img src="https://cdn.leadster.com.br/neurolead/img/avatar/12.png" alt="assitente botão" /> -->
      </div>
      <button @click="toggleChatBot">
        <span class="material-symbols-outlined"> cancel </span>
      </button>
    </div>
    <div class="chat-main">
      <div id="chat-message">
        <!-- imprime o texto da assistente -->
        <div v-for="(response, index) in userRespostas" :key="index" class="assistente-container-message" >
          <span class="assistente-resposta resposta-massage">
            {{ response }}
          </span>
        </div>
         <!-- imprime o texto do usuário -->
        <div v-for="(response, index) in userRespostas" :key="index" class="user-container-message" >
          <span class="user-resposta resposta-massage">
            {{ response }}
          </span>
        </div>
      </div>
      <div class="chat-massage-bottom">
        <input type="text" id="text" placeholder="Envie sua resposta..." v-model="userResposta" />
        <button class="send-message" @click="enviarResposta">
          <span class="material-symbols-outlined"> send </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chatWasOpen: true,
      chatBotOpen: false,
      userResposta: '',
      userRespostas: []
    }
  },
  methods: {
    toggleChatBot() {
      this.chatWasOpen = !this.chatWasOpen
      this.chatBotOpen = !this.chatBotOpen
    },
    enviarResposta() {
      console.log('enviado')
      if (this.userResposta.trim() !== '') {
        this.userRespostas.push(this.userResposta)
        this.userResposta = '' // Limpa a entrada do usuário
      }
    }
  }
}
</script>

<style scoped>
.assistente-button {
  bottom: 0;
  right: 60px;
  position: fixed;
  z-index: 99;
  margin-bottom: 60px;
  cursor: pointer;
  transition: 0.5s;
  display: block;
  opacity: 1;
}

.assistente-button::before {
  content: '';
  width: 20px;
  height: 20px;
  background-color: #2ecc71;
  position: absolute;
  border-radius: 50%;
  bottom: 5px;
  right: -3px;
}

.assistente-button img {
  border-radius: 50%;
  width: 60px;
}

.assistente-button.closed {
  animation-name: button-fade-out;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.assistente-button.open {
  animation-name: button-fade;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.chat-container {
  height: 327px;
  max-width: 420px;
  width: 100%;
  position: fixed;
  margin-bottom: 60px;
  right: 60px;
  bottom: 0;
  display: none;
  z-index: 70;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 var(--background-gray-700);
  flex-direction: column;
}

.chat-container.open {
  display: flex;
  animation-name: button-fade;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.chat-container.closed {
  display: flex;
  animation-name: button-fade-out;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.chat-header {
  background: var(--background-gray-700);
  width: 100%;
  justify-content: end;
  display: flex;
  padding: 6px 16px;
  border-radius: 8px 8px 0 0;
  justify-content: space-between;
}

.chat-header button {
  color: var(--background-white);
}

.chat-main {
  width: 100%;
  height: 100%;
  padding: 10px 16px;
  background: var(--background-white);
  border-radius: 0 0 8px 8px;
}

#chat-message {
  width: 100%;
  height: 200px;
  padding: 0 16px;
  overflow-y: auto;
}

.chat-massage-bottom {
  position: relative;
  height: 56px;
  border: 2px solid var(--background-gray-700);
  border-radius: 50px;
  display: flex;
  align-items: center;
}

.chat-massage-bottom input {
  padding: 16px;
  height: 20px;
  width: 100%;
  max-width: 307px;
  margin-left: 15px;
  border-radius: 8px;
}

.send-message {
  background: var(--background-gray-700);
  color: var(--background-white);
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-9px, -50%);
  display: flex;
  justify-content: center;
  border-radius: 50%;
  padding: 8px;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--background-gray-700);
  border-radius: 6px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.assistente-icon {
  position: relative;
}

.assistente-icon img {
  width: 50px;
  height: auto;
  border-radius: 50%;
}

.assistente-icon::before {
  content: '';
  width: 20px;
  height: 20px;
  background-color: #2ecc71;
  position: absolute;
  border-radius: 50%;
  bottom: 0px;
  right: -10px;
  border: 3px solid var(--background-gray-700);
}

.user-container-message{
    width: 100%;
    display: flex;
    justify-content: end;
}

.assistente-container-message{
    width: 100%;
    display: flex;
}

.user-resposta{
    background:var(--background-wine);
    color: var(--background-white);
}

.assistente-resposta{
    background: rgb(238, 238, 238);
    color: var(--background-gray-400);
}

.resposta-massage{
    padding: 26px;
    border-radius: 20px;
    margin-bottom: 20px;
    max-width: 340px;
    overflow: hidden;
    text-overflow: ellipsis;
}

@keyframes button-fade-out {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    display: none;
    opacity: 0;
    transform: translate(0, 100px);
  }
}

@keyframes button-fade {
  0% {
    display: none;
    opacity: 0;
    transform: translate(0, 100px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@media (max-width: 500px) {
  .chat-container {
    right: 0px;
  }
}
</style>
