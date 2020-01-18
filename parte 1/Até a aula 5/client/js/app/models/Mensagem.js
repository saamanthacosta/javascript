class Mensagem {
    
    constructor(texto = '') {
        this._texto = texto;
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