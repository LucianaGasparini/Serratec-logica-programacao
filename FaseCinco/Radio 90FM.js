//var prompt = require("prompt-sync")()    npm install prompt-sync

//O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!//

var prompt = require("prompt-sync")();
do {   
    // Entrada
var telefone = prompt("ligando para voc: ");

//Processamento
var naoAcertou = telefone == "90show";

//Saída
if (naoAcertou)
console.log("Parabéns vc ganhou!");
else
console.log("Que pena...")
}
while (naoAcertou);