// aplicação do else 
    
var prompt = require("prompt-sync")()
console.log("===Shopping - Sanitários==");
//Entradas
var cor = prompt("Qual a cor do indicador? (Verde, vermelho)");

//processamento
var liberado = cor != "vermelho";

//saída
var saida = "Aguarde antes de entrar";

if (liberado)
saida = "Pode entrar no sanitário"
else
saida = "Aguarde antes de entrar";

console. log(saida)