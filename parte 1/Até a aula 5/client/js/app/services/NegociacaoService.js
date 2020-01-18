class NegociacaoService { 

    obterNegociacoesDaSemana(callback) {

        // criamos uma instancia desse obj
        let xhr = new XMLHttpRequest();
        // abrimos a conexão com esse endereço, ele deu um GET para o link atual /negociação/semana
        xhr.open('GET', 'negociacoes/semana');
        // caso ela mude de estado 
        xhr.onreadystatechange = () => {
            // no estado 4 = requisição concliida e a repsosta pronta
            if(xhr.readyState == 4) {
                // se o status for = 200, logo foi realizada
                if(xhr.status == 200) {
                    // xhr.responseText irá retornar o texto com os objs
                    // JSON.parse irá transformar esse texto em um JSON 
                    // iremos mapear todos os objs desse JSON em uma negociação
                    // como a data está vindo em um texto, podemos passa-la como new Date, que receberá essa data
                   callback(null, JSON.parse(xhr.responseText).map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
                } else {
                    callback('Não foi possível obter as negociações da semana', null);
                }  
            }
        };
        xhr.send();
    }

    obterNegociacoesDaSemanaAnterior(callback) {

        // criamos uma instancia desse obj
        let xhr = new XMLHttpRequest();
        // abrimos a conexão com esse endereço, ele deu um GET para o link atual /negociação/semana
        xhr.open('GET', 'negociacoes/anterior');
        // caso ela mude de estado 
        xhr.onreadystatechange = () => {
            // no estado 4 = requisição concliida e a repsosta pronta
            if(xhr.readyState == 4) {
                // se o status for = 200, logo foi realizada
                if(xhr.status == 200) {
                    // xhr.responseText irá retornar o texto com os objs
                    // JSON.parse irá transformar esse texto em um JSON 
                    // iremos mapear todos os objs desse JSON em uma negociação
                    // como a data está vindo em um texto, podemos passa-la como new Date, que receberá essa data
                   callback(null, JSON.parse(xhr.responseText).map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
                } else {
                    callback('Não foi possível obter as negociações da semana anterior', null);
                }  
            }
        };
        xhr.send();
    }

    obterNegociacoesDaSemanaRetrasada(callback) {

        // criamos uma instancia desse obj
        let xhr = new XMLHttpRequest();
        // abrimos a conexão com esse endereço, ele deu um GET para o link atual /negociação/semana
        xhr.open('GET', 'negociacoes/retrasada');
        // caso ela mude de estado 
        xhr.onreadystatechange = () => {
            // no estado 4 = requisição concliida e a repsosta pronta
            if(xhr.readyState == 4) {
                // se o status for = 200, logo foi realizada
                if(xhr.status == 200) {
                    // xhr.responseText irá retornar o texto com os objs
                    // JSON.parse irá transformar esse texto em um JSON 
                    // iremos mapear todos os objs desse JSON em uma negociação
                    // como a data está vindo em um texto, podemos passa-la como new Date, que receberá essa data
                   callback(null, JSON.parse(xhr.responseText).map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
                } else {
                    callback('Não foi possível obter as negociações da semana retrasada', null);
                }  
            }
        };
        xhr.send();
    }
}