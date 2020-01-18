// quando o usuário clicar no botão Incluir, o controller irá adicionar os itens do formulário na tabela abaixo
class NegociacaoController {

    // utilizaremos as variáveis de input dentro do constructor para que melhore a performance do código
    /* se esse código não estivesse dentro do constructor mas no adiciona e caso o usuário clicasse várias vezes 
    no botão de submit, o querySelector iria percorrer várias vezes o dom, o que não é uma boa prática */
    constructor(){
        // criação de uma variável que irá ser manuseada como um document.querySelector, reduzindo o tamanho do código
        // o bind significa que o querySelector irá utilizar um método binding
        // o querySelector irá para a variável $, mantendo uma associação ainda com o document
        let $ = document.querySelector.bind(document);
    
        // a variável criada inputTal irá receber os dados que foram inseridos no formulário através do id #tal
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._ordemAtual = '';

        this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 
                'adicionaNegociacao', 'esvaziaNegociacoes', 'ordenaNegociacoes', 'inverteOrdemNegociacoes');
        this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'texto');  
    }
    
    // função de adicionar os dados do formulário na tabela após um evento de click no botão de adicionar
    adiciona(event){
        // proibir a ocorrencia de eventos comuns (como atualizar após o click de um botão)
        event.preventDefault();
        
        try {
            // adicionar uma negociação na lista de negociações
            this._listaNegociacoes.adicionaNegociacao(this._criaNegociacao());
            // adicionar um texto à mensagem, falando que a negociacao foi criada com sucesso
            this._mensagem.texto = 'Negociação adicionada com sucesso';
            // limpará o formulário de criação de uma negociação
            this._limpaFormulario();
        } catch(erro) {
            this._mensagem.texto = erro;
        }
    }

    importaNegociacoes() {
        // chamamos o NegociacaoService para conseguir importar as Negociações
        let service = new NegociacaoService();

        // promise irá executar elas em uma ordem síncrona (já que o a conexão é assíncrona)
        Promise.all([service.negociacoesDaSemana(), service.negociacoesDaSemanaAnterior(), service.negociacoesDaSemanaRetrasada()])
        .then(negociacoes => { 
            negociacoes
            .reduce((listaCheia, lista) => listaCheia.concat(lista), [])
            .forEach(negociacao => this._listaNegociacoes.adicionaNegociacao(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso'; 
        })
        .catch(erro => this._mensagem.texto = erro);

    }

    // função de remover os dados da lista de negociações após um evento de click no botão de apagar
    apaga() {
        // irá esvaziar a lista de negociações
        this._listaNegociacoes.esvaziaNegociacoes();
        // adicionar um texto à mensagem, falando que as negociações foram removidas com sucesso
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }
    
    // função que cria uma negociação
    _criaNegociacao(){
        // uso do helper que irá transferir o texto da string para uma data
        // função irá retornar uma nova negociação, que tem como parametro a data, quantidade e valor
        return new Negociacao(DateConverter.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }

    // usamos o _ para dizer que esse método só pode ser chamado por essa classe
    // responsável por limpar os inputs adicionados ao formulário depois de serem adicionados a lista de negociações
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        // significa que assim que tudo for limpo, o foco (digitação) voltará para o campo da data
        this._inputData.focus();
    }

    // ordenar uma coluna ao clicar nela
    ordena(coluna) {
        // a ordem atual começa zerada, logo, ela vai começar ordenando. 
        // se ela estiver com o valor da coluna (logo, não está zerada), ela inverte a ordem
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdemNegociacoes();
        } else {
            this._listaNegociacoes.ordenaNegociacoes((a, b) => a[coluna] - b[coluna]);    
        }
        this._ordemAtual = coluna;
    }
}

             