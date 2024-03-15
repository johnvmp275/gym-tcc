function criarAssistenteChat(username) {
    return [
        { message: 'como posso te chamar?' },
        { message: `Olá, ${username}, como eu posso te ajudar?` },
    ];
}

export default {
    criarAssistenteChat
};