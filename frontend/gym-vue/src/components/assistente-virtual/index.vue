<script setup>
import chatMassage from './components/chat/chatMassage.vue'
import assistenteChat from './script-assistente/scriptAssiste.js'
</script>

<template>

  <div
    :class="{ 
    'assistente-button': true,
     open: chatWasOpen, 
     closed: chatBotOpen 
     }"
    @click="toggleChatBot"
  >
    <img 
      src="./img/atendente.png" 
      alt="assitente botão" 
    />
  </div>

  <div 
    :class="{ 'chat-container': true, 
    open: chatBotOpen, 
    closed: chatWasOpen }"
  >
    <div class="chat-header">

      <div class="assistente-icon">
        <img 
          src="./img/atendente.png" 
          alt="assitente botão" 
        />
      </div>

      <button @click="toggleChatBot">
        <span class="material-symbols-outlined"> cancel </span>
      </button>

    </div>

    <div class="chat-main">

      <chatMassage 
        :mergedResponsesChat="mergedResponsesChat" 
        :messageLoader="messageLoader"
      />

      <div class="chat-massage-bottom" v-if="showInput">
        <template v-if="typeInputText">
          <input
            type="text"
            id="text"
            placeholder="Envie sua resposta..."
            v-model="userResposta"
            @keydown.enter="enviarResposta(this.userResposta)"
          />
        </template>
        <template v-else>
          <select
            name="select-options"
            id="select-options"
            v-model="userResposta"
            @keydown.enter="enviarResposta"
          >
            <option value="null" style="display: none">-- Selecione uma opção--</option>
            <option value="Não estou conseguindo achar um produto.">
              Não estou conseguindo achar um produto.
            </option>
            <option value="Gostaria de ver o prazo de entrega do meu pedido.">
              Gostaria de ver o prazo de entrega do meu pedido.
            </option>
            <option value="Outra dúvida.">Outra dúvida.</option>
          </select>
        </template>
        <button class="send-message" @click="enviarResposta(this.userResposta)">
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
      assistenteScript: [],
      userRespostas: [],
      assistenteRespostas: [],
      mergedResponsesChat: [],
      chatWasOpen: true,
      chatBotOpen: false,
      assistenteMessage: false,
      messageLoader: true,
      typeInputText: true,
      showInput: false,
      redirectUser: false,
      ultimoIndex: 0,
      limit: 2,
      userResposta: null,
      userName: 'John',
      userEamil: 'joao@gmail.com'
    }
  },
  methods: {
    toggleChatBot() {
      this.chatWasOpen = !this.chatWasOpen
      this.chatBotOpen = !this.chatBotOpen

      this.assistenteDigitando()
    },
    enviarResposta(response) {
      if (this.userResposta !== null || this.userSelected !== null) {
        const dataDeEnvio = new Date()

        // horas e minutos
        const horaEnvio = `${dataDeEnvio.getHours()}:${dataDeEnvio.getMinutes()}`

        //Puxa a resposta do usuário
        this.mergedResponsesChat.push({
          message: this.userResposta,
          type: 'user',
          from: 'user-resposta',
          checkInput: true,
          enviadoEm: horaEnvio
        })

        // Limpa o campo de resposta
        this.userResposta = null

        // Aumenta o limite de respostas da assitente
        this.limit++

        this.messageLoader = true
        this.assistenteMessage = false
        this.showInput = false

        // Envia os dados do user name
        this.response = response
        this.assistenteScript = assistenteChat.criarAssistenteChat(this.response)

        this.assistenteDigitando()
      }
    },
    assistenteDigitando() {
      if (!this.assistenteMessage) {
        this.assistenteMessage = true
        this.messageLoader = true

        let i = this.ultimoIndex

        setTimeout(() => {
          setInterval(() => {
            if (i <= this.limit) {
              const dataDeEnvio = new Date()

              // horas e minutos
              const horaEnvio = `${dataDeEnvio.getHours()}:${dataDeEnvio.getMinutes()}`

              // Verifique se ainda há mensagens a serem exibidas
              this.mergedResponsesChat.push({
                message: this.assistenteScript[this.ultimoIndex].message,
                type: 'assistente',
                from: 'assistente-resposta',
                checkInput: this.assistenteScript[this.ultimoIndex].checkInput,
                loader: this.assistenteScript[this.ultimoIndex].loading,
                typeInputText: this.assistenteScript[this.ultimoIndex].typeInput,
                enviadoEm: horaEnvio
              })

              this.showInput = this.assistenteScript[this.ultimoIndex].checkInput
              this.messageLoader = this.assistenteScript[this.ultimoIndex].loading
              this.typeInputText = this.assistenteScript[this.ultimoIndex].typeInput
              this.redirectUser = this.assistenteScript[this.ultimoIndex].redirect
              this.ultimoIndex++

              i++

              if (this.redirectUser) {
                this.assistenteRedirect()
              }
            }
          }, 3000)
        }, 1000)
      }
    },
    assistenteRedirect() {

      setTimeout(() => {
        const texto = encodeURIComponent(`Olá, meu nome é ${this.userName} e meu e-mail é ${this.userEamil}. Vim através do assistente de leads do site. ${this.userResposta}`)
        const numeroTelefone = '5518991724468'

        // const url = `whatsapp://send?text=${texto}&phone=${numeroTelefone}`;

        // window.open(url, '_blank');

        if (window.innerWidth < 768) {
          window.open(`whatsapp://send?phone=${numeroTelefone}&text=${texto}`, '_blank');
        }else{
          window.open(`https://web.whatsapp.com/send?text=${texto}&phone=${numeroTelefone}`, '_blank');
        }

      }, 5000)
    }
  },
  mounted() {
    this.assistenteScript = assistenteChat.criarAssistenteChat()
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
  border-radius: 6px;
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
  animation: iconAnimation 0.8s cubic-bezier(0, 0.35, 0.28, 0.9) forwards;
  animation-delay: 0.5s;
  transform: scale(0, 0);
}

#select-options {
  width: 100%;
  max-width: 320px;
  margin-left: 10px;
  border: none;
  outline: none;
}

select {
  font-size: 16px;
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

@keyframes iconAnimation {
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }
  30% {
    opacity: 1;
    background-color: white;
    transform: scale(1.5, 1.5);
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
  .chat-container {
    right: 0px;
    margin-bottom: 0px;
    height: 100%;
    border-radius: 0px;
    max-width: 100%;
  }
}
</style>
