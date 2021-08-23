//var prompt = require("prompt-sync")()    npm install prompt-sync

/*Exercício digestivo

/O shopping decidiu colocar na entrada dos sanitários um indicador luminoso de capacidade. 
Antes de entrar, a pessoa deve responderse o indicador está verde ou vermelho.
Caso a resposta seja vermelho, a pessoa deve aguarda antes de entrar.
*/


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

console. log(saida)



