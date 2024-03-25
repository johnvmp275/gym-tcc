function criarAssistenteChat(response) {
  return [
    {
      message: 'Olá! É um prazer tê-lo(a) aqui! Meu nome é Roberta e vou auxiliá-lo(a) no que precisar😄',
      checkInput: false,
      typeInput: true,
      loading: true
    },
    {
      message: 'Para isso preciso de algumas informações <strong>rápidas</strong> 🙂',
      checkInput: false,
      typeInput: true,
      loading: true
    },
    {
      message: 'Como posso te <strong>chamar</strong>?',
      checkInput: true,
      typeInput: true,
      loading: false
    },
    {
      message: `Olá <strong>${response}</strong>`,
      checkInput: false,
      typeInput: true,
      loading: true
    },
    {
      message: 'Por gentileza, poderia selecionar qual a sua dúvida?',
      checkInput: true,
      typeInput: false,
      loading: false
    },
    {
      message: 'Excelente, estamos quase lá 😁',
      checkInput: false,
      typeInput: true,
      loading: true
    },
    {
      message: 'Muito obrigada! Já estou te redirecionando para um dos nossos atendentes! 😉💻 <button class="btn-redirect-whats" @click="teste" >Falar por WhatsApp</button>',
      checkInput: false,
      typeInput: true,
      loading: false,
      redirect: true,
    },
  ]
}

export default {
  criarAssistenteChat
}
