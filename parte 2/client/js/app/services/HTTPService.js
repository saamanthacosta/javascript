class HTTPService {

    get(url) {
        // irá retornar uma promise, que irá devolver um resolve caso consiga realizar e um reject caso contrário
        return new Promise((resolve, reject) => {
            // criamos uma instancia desse objeto
            let xhr = new XMLHttpRequest();
            // abrimos a conexão com esse endereço, ele deu um GET para o link atual /negociação/semana
            xhr.open('GET', url);
            // caso ela mude de estado 
            xhr.onreadystatechange = () => {
                // no estado 4 = requisição concliida e a repsosta pronta
                if(xhr.readyState == 4) {
                    // se o status for = 200, logo foi realizada
                    if(xhr.status == 200) {
                        // xhr.responseText irá retornar o texto com os objs
                        // JSON.parse irá transformar esse texto em um JSON 
                    resolve(JSON.parse(xhr.responseText));
                    } else reject('Não foi possível obter as negociações');
                }
            };
            xhr.send();
        })
    }

    post(url, dado) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) resolve(JSON.parse(xhr.responseText));
                    else reject(xhr.responseText);
                }
            };
            // usamos JSON.stringify para converter objeto em uma string no formato JSON
            xhr.send(JSON.stringify(dado)); 
        });

    }
}