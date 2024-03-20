function criarAssistenteChat(username) {
  return [
    {
      message: 'Olá! É um prazer tê-lo(a) aqui! Meu nome é <strong>Roberta</strong> e vou auxiliá-lo(a) no que precisar😄',
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
      message: `Olá <strong>${username}</strong>`,
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
      teste:
        [

        ]
    }
  ]
}

export default {
  criarAssistenteChat
}
