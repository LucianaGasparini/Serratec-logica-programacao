//O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!//
const prompt = require("prompt-sync")();


const respOficial = "digitacao";

//para condiciona os 03 ouvintes com duas chances
for (var i = 0; i < 3; i++) {
  console.log("Alô ouvinte " + (i + 1));
  //contadora, decremento
  var chances = 2;

//faça a pergunta gera-se uma resposta numa condição que será tratada pelo if
  do {
    var resposta = prompt("Qual a sua resposta da pergunta ao vivo? ");
    var acertou = resposta == respOficial;

    if (acertou) {
      console.log("Ouvinte " + (i + 1) + " ganhou caneca!");
    } else {
      chances--;
      console.log("Você errou! ", chances);
    }
// while considera que enquando não acertou repete até que as duas chances sejan maior que zero para cada um dos 3 ouvintes.
  } while (!acertou && (chances > 0));
}

