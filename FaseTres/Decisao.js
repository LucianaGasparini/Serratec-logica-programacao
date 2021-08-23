var prompt = require("prompt-sync")()
/*Declaração
//seletores

Se (condição for atendida) então
instrução;
*/

var nome;

nome = prompt("prompt");
var numnero = 42

var estaVacinado = true;

var resposta = prompt("Você está Vacidad? Responda SIM ou NAO");

estaVacinado = resposta =="SIM";
var TEXTO = "Que pena, mas jájá é sua vez";

if (estaVacinado)
console.log("Parabéns, não deixe de tomar a segunda dose.");
console.log(TEXTO);

node olaMundo
