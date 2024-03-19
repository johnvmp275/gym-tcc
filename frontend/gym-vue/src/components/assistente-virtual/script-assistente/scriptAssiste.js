function criarAssistenteChat(username) {
  return [
    {
      message: 'Olá! É um prazer tê-lo(a) aqui! Meu nome é Lívia e vou auxiliá-lo(a) no que precisar😄',
      checkInput: false,
      loading: true
    },
    {
      message: 'Para isso preciso de algumas informações <strong>rápidas</strong> 🙂',
      checkInput: false,
      loading: true
    },
    {
      message: 'Como posso te <strong>chamar</strong>?',
      checkInput: true,
      loading: false
    },
    {
      message: `Olá <strong>${username}</strong>`,
      checkInput: false,
      loading: true
    },
    {
      message: 'Por gentileza, poderia selecionar qual a sua dúvida?',
      checkInput: true,
      loading: false
    },
    { message: 'Excelente, estamos quase lá 😁' }
  ]
}

export default {
  criarAssistenteChat
}
