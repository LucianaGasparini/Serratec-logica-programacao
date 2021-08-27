//No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.//
var repete = true;
var prompt = require("prompt-sync")();

while(repete){
    console.log ("Basta-me um pequeno gesto,\nfeito de longe e de leve,\npara que venhas comigo\ne eu pra sempre te leve");

    var resposta = prompt(" Caro ouvinte você deseja apreciar novamente a poesia? Responda sim ou nao ")

    if (resposta == "sim"){
        repete = true;
    }

    else{
    repete = false
    }
} console.log("fim")
