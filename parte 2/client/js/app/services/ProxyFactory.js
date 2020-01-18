class ProxyFactory {

    // vai receber um objeto, a propriedade que você quer instanciar e as ações a serem realizadas
    static create(objeto, props, acao) {

        // dentro de um objeto você irá ter as ações de get e set
        return new Proxy(objeto, {

            // o get verifica se a propriedade é uma função, se for, a ação será realizada
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory.verificaFuncao(target[prop])) {
                    return function() {
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return retorno;
                    };
                };
                // se não será retornado o get da função
                return Reflect.get(target, prop, receiver);
            },

            // verifica se tem alguma ação para ser realizada e, tendo ou não, atribui um novo valor ao objeto
            set(target, prop, value, receiver) {
                let retorno = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)) {
                    acao(target);
                }
                return retorno;
            }
        })
    }

    // verifica se é ou não uma função
    static verificaFuncao(func) {
        return typeof(func) == typeof(Function)
    }
}