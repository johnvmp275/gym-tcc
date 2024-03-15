function criarAssistenteChat(username) {
  return [
    {
      message:
        'Olá! É um prazer tê-lo(a) aqui! Meu nome é Lívia e vou auxiliá-lo(a) no que precisar😄',
        showInput: false
    },
    {
      message: 'Para isso preciso de algumas informações <strong>rápidas</strong> 🙂',
      showInput: false
    },
    { message: 'Como posso te <strong>chamar</strong>?', 
      showInput: true
    },
    { 
      message: `Olá <strong>${username}</strong>`,
      showInput: false
    },
    //{ message: `Para seguirmos, por favor <strong>${username}</strong> nos informe seu e-mail para contato` },
    { message: 'Por gentileza, poderia selecionar qual a sua dúvida?' },
    { message: 'Excelente, estamos quase lá 😁' }
  ]
}

export default {
  criarAssistenteChat
}
