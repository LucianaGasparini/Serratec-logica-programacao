
    function substituirTodos(texto, antigo, novo){
        //Processamento = o trabalho dessa funçao
        var resultado =texto.replace(antigo, novo);

        var posicao = resultado. indexOf(antigo);

        // case base
        if(posicao > -1){
            console.log("ainda tem ocorrencia");
            resultado = substituirTodos(resultado, antigo,novo);

        }else{
            console.log("tudo substituido")
        }
            return resultado;
    }

var frase = "Eu não vou terminar o curso. Eu não tenho computador. Hoje não em sol.";
var nova = substituirTodos(frase, "não", "sim");
console.log(nova);

function substituirTudo(texto, antigo, novo){
var resultado = texto;

do {
    resultado = resultado.replace(antigo, novo);
    var posicao = resultado.indexOf(antigo);
}while (posicao > -1);

    return resultado;
}
nova = substituirTudo(frase, "não","certeza");
console.log(nova);














