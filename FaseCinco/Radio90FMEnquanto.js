var prompt = require("prompt-sync")();
var telefone = prompt("Ligando para vc: ");
var naoAcertou = (telefone != "90show");

while (naoAcertou){
    console.log("que pena...");

    telefone = prompt("Ligando para voc: ")
    naoAcertou = (telefone != "90show");
}

console.log("Parabens você Ganhou!");
