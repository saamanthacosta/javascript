class NegociacoesView {

    // rrecebe como parametro o querySelector do div no index.html
    constructor(elemento) {
        this._elemento = elemento;
    }

    // usamos um Template String para que possamos pular a linha sem ter problema de concatenação
    _template(model) {
        return ` 
            <table class="table table-hover table-bordered">
                <thead>
                    <tr id="tabela">
                        <th id="tabelaData">DATA</th>
                        <th id="tabelaQuantidade">QUANTIDADE</th>
                        <th id="tabelaValor">VALOR</th>
                        <th id="tabelaVolume">VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(n => ` 
                        <tr>
                            <td>${DateConverter.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3"></td>
                        <td> 
                            ${model.volumeTotal}
                        </td>
                </tfoot>
            </table> 
        `;
    }

    // o model é o _listaNegociacoes
    update(model){
        // innerHTML converte a string do template em elementos do dom (será inserido como filhos da div criada no index.html)
        this._elemento.innerHTML = this._template(model);
    }
}

// a função reduce (linha 35), ela processa um array e no final retorna um único resultado
/* explicando a linha 35: a lista de negociações (model) irá realizar um get negociações e utiliza-la com o reduce
o total irá ser inicializado com 0,0 e para cada n.volume da lista de negociações, o total irá aumentar. logo, esse
comando serve para ir somando todos os valores de volume que serão adicionados na lista de negociações */
