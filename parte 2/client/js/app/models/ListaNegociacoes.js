class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    // adicionar uma negociação no array de negociações
    adicionaNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    // esvaziar a lista de negociações
    esvaziaNegociacoes() {
        this._negociacoes = [];
    }

    ordenaNegociacoes(criterio) {
        this._negociacoes.sort(criterio);        
    }

    inverteOrdemNegociacoes() {
        this._negociacoes.reverse();
    }
    
    // receber o array com as negociações
    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }

}