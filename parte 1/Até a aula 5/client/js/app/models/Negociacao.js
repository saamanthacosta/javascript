class Negociacao {

    // usamos o _ como usamos o "private", significa que somente a classe possa alterar esses dados
    constructor(data, quantidade, valor){

        /* caso o desenvolvedor crie uma variável com data e depois tente atribuir a variável criada a um objeto Negociável
        ele só conseguirá modificar o valor do dado data através dessa variável criada
        porém, se atribuirmos um novo objeto Data que recebe como parametro a data, o desenvolvedor não consegue mais alterar
        chamamos isso de construção defensiva */
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;   
        /* para impedir o desenvolvedor de alterar esses valores (mesmo com o _ é possivel altera-los),
        devemos utilizar um Object.freeze(objetoCriado): porém, ele ainda é raso e conseguem modificar */
        Object.freeze(this);
        // obs: para analisarmos se um objeto está congelado chamamos por Object.isFrozen(objetoCriado)
    }
    
    // usamos o get data para ter acesso a data do constructor de um objeto já existente
    // chamamos por:   objetoCriado.data
    get data(){
        // criamos um novo objeto date que recebe os dados do this._data
        // o getTime de uma data recebe um número enorme que representa essa data
        // se o desenvolvedor tentar modificar a data, você não altera o dado interno, apenas o externo
        // chamamos isso de construção defensiva
        return new Date(this._data.getTime());
    }
    
    // usamos o get quantidade para ter acesso a quantidade do constructor de um objeto já existente
    // chamamos por:   objetoCriado.quantidade
    get quantidade(){
        return this._quantidade;
    }
    
    // usamos o getValor para ter acesso ao valor do constructor de um objeto já existente
    // chamamos por:   objetoCriado.valor
    get valor(){
        return this._valor;
    } 
    
    // usamos o getValor para ter acesso ao volume do constructor de um objeto já existente
    // chamamos por:   objetoCriado.volume
    get volume(){
        return this._quantidade * this._valor; 
    }
}