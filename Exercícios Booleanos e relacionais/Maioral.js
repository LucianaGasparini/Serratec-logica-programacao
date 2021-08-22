/*Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
== Maioral ==
Player 1: 7
Player 2: 8
: Resultados :
Player 1 venceu? False
Player 2 venceu? True
Houve empate? False*/

var prompt=require("prompt-sync")()
console.log("==Maioral=\nQuem digitar número maior vence.");

var player1 = prompt("Player 1: ")
var player2 = prompt("Player 2: ")

console.log(": Resultados :")

console.log("Player 1 venceu?", player1 > player2)
console.log("Player 2 venceu?" ,player1 < player2)
console.log("Houve empate?" , player1 == player2)
