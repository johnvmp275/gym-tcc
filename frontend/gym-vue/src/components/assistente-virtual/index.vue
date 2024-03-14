<template>
    <div :class="{ 'assistente-button': true, 'open': chatWasOpen }" @click="toggleChatBot">
        <img src="https://cdn.leadster.com.br/neurolead/img/avatar/12.png" alt="assitente botão">
    </div>
    <div :class="{ 'chat-container': true, 'open': chatBotOpen }">
        <div class="chat-header">
            <div class="assistente-icon">
                <img src="https://cdn.leadster.com.br/neurolead/img/avatar/12.png" alt="assitente botão">
            </div>
            <button @click="toggleChatBot">
                <span class="material-symbols-outlined">
                    cancel
                </span>
            </button>
        </div>
        <div class="chat-main">
            <div id="chat-message">
                <!-- imprime o texto entre o usuário e a assistente -->
            </div>
            <div class="chat-massage-bottom">
                <input type="text" name="" id="" placeholder="Sua resposta...">
                <button class="send-message">
                    <span class="material-symbols-outlined">
                        send
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chatWasOpen: false,
            chatBotOpen: false
        }
    },
    methods: {
        toggleChatBot() {
            this.chatWasOpen = !this.chatWasOpen;
            this.chatBotOpen = !this.chatBotOpen;
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
    transition: .5s;
    display: block;
}

.assistente-button::before {
    content: '';
    width: 25px;
    height: 25px;
    background-color:  greenyellow;
    position: absolute;
    border-radius: 50%;
    bottom: 5px;
    right: 0;
}

.assistente-button img {
    border-radius: 50%;
    width: 80px;
}

.assistente-button.open {
    display: none;
}

.chat-container {
    height: 327px;
    width: 420px;
    position: fixed;
    margin-bottom: 60px;
    right: 60px;
    bottom: 0;
    display: none;
    z-index: 70;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 #464545;
    flex-direction: column;
}

.chat-container.open {
    display: flex;
}

.chat-header {
    background: var(--background-red);
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
    height: 190px;
    padding: 0 16px 8px 16px;
    overflow-y: auto;
}

.chat-massage-bottom {
    position: relative;
    height: 56px;
    border: 2px solid var(--background-red);
    border-radius: 50px;
    display: flex;
    align-items: center;
}

.chat-massage-bottom input {
    padding: 16px;
    width: 85%;
}

.send-message {
    background: var(--background-red);
    color: var(--background-white);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    border-radius: 50%;
    padding: 8px;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--background-red);
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
    background-color: greenyellow;
    position: absolute;
    border-radius: 50%;
    bottom: 0px;
    right: -10px;
    border: 3px solid var(--background-red);
}
</style>