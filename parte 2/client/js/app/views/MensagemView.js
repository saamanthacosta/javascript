class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    // quando uma nova negociação for criada, será renderizada uma mensagem confirmando sua criação 
    template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}