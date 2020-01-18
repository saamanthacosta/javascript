class NegociacaoService { 

    constructor() {
        this._http = new HTTPService();
    }

    negociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/semana')
                .then(negociacoes => {
                resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
                })
                .catch(erro => reject('Não foi possível obter as negociações da semana'))
        });
    }

    negociacoesDaSemanaAnterior() {
         return new Promise((resolve, reject) => {
            this._http.get('negociacoes/anterior')
                .then(negociacoes => {
                resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
                })
                .catch(erro => reject('Não foi possível obter as negociações da semana anterior'))
        });
    }

    negociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/retrasada')
                .then(negociacoes => {
                resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
                })
                .catch(erro => reject('Não foi possível obter as negociações da semana retrasada'))
        });
    }
}