// Microsoft Edge (até a versão 13) não possui includes de Array
if(!Array.prototype.includes) {
    // Se não existir, adiciona;
    Array.prototype.includes = function(elemento) {
        return this.indexOf(elemento) != -1;
    };
}