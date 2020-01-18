class DateConverter {
    
    // usamos o static para que a possamos acessar diretamente o método da classe, sem precisar instanciar
    constructor(){
        throw new Error('DataHelper não pode ser instanciada');
    }

    /* - temos que retornar algo com o objeto Date pois o this._inputData recebe uma string
    - split é uma função de string que irá separa-la usando o - como separador dos caracteres
    - usamos o - pois o Date (ano/mes/dia) interpreta a data de maneira diferente da que estamos utilizando 
    no formulário (dia/mês/ano)
    - a função map irá mapear toda o array 
    - os ... (spread operator) significa que cada . irá entrar, separadamente, no array do Date
    - quando você só tem uma instrução na function, você pode usar o arrow function
    - a arrow function já retorna o valor, então não precisamos usar o "return"
    - o item - indice % 2 significa que quando o indice (posição do array) do item (array Date) 
    for 1 (logo, posição do mês), o valor que está nesse indice do item será decrementado */
    static textoParaData(texto) {
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd');
        } 
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    // pegar os dados de uma data separadamente e transformar em um texto
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

        // return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    }
}


/* OUTRAS RESOLUÇÕES SOBRE A QUESTÃO DO DATE
1ª FORMA: let data = new Date(this._inputData.value.split('-'));

2ª FORMA: let data = new Date(this._inputData.value.replace(/-/g, ','));
- adicionaremos uma expressão regular pedindo que seja trocado o hífen de todas as ocorrências da string

3ª FORMA: let data = new Date(
    ...this._inputData.value
    .split('-')
    .map(function(item, indice)){
        return item - indice % 2});
        
- let data = new Date(...this._inputData.value.split('-')); -> mês retornado é o anterior ao digitado
PROBLEMA: o segundo . irá entregar um mês, mas os meses no Date funcionam de 0 - 11 
SOLUÇÃO: decrementar 1 de cada mês   */