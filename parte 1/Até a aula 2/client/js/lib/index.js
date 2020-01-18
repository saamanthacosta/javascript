// criação da variável campos, que recebe os dados do id data, id quantidade e id valor
var campos = [
    document.querySelector('#data'),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]

// criação de uma variável tbody que recebe todos os atributos da classe table tbody
var tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function(event){
    // proibição dos eventos naturais (como a cada click em um botão a página recarregar)
    event.preventDefault();
    // criação de uma variável tr, que irá ser um tr no html
    var tr = document.createElement('tr');
    // para cada dado do campo
    campos.forEach(function(campo){
        // criar uma variável td, que irá ser um novo td dentro da tr
        var td = document.createElement('td');
        // td irá receber o conteúdo de texto do valor do campo
        td.textContent = campo.nodeValue;
        // cada td será fixado no tr criado anteriormente
        tr.appendChild(td);
    })

    // criação da variável volume, que irá ser uma nova td dentro do tr criado anteriormente (linha 14)
    var tdVolume = document.createElement('td');
    // o volume irá receber o conteúdo de texto da multiplicação da quantidade e do valor do array de campo
    tdVolume.textContent = campos[1].value * campo[2].value;
    // a tr do volume será fixada no tr criado anteriormente (14)
    tr.appendChild(tdVolume);

    // a tr criada anteriormente (linha 14) será fixada no tbody criado anteriormente (linha 9)
    tbody.appendChild(tr);
    
    // iremos modificar os valores dos dados do campos após a criação da td
    // logo, após o click de submit os dados irão zerar
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();
})