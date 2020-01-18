class Mensagem {
    
    constructor() {
        this._texto = texto || ''; // se o texto for undefined, vai passar ''
    }
    
    // receber o texto
    get texto() {
        return this._texto;
    }
    
    // modificar o texto
    set texto(texto) {
        this._texto = texto;
    }
}