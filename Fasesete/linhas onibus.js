// As linhas de ônibus da capital são identificadas por números. A empresa "Pão de Acúcar opera 8 linha." O passageiro ira digitar onúmero do ônibus que está vindo, e o programa mostra o nome da linha/trajeto.

" Rosário x Pimenteiras"
"Perpétuo x Fontes Santa"
" Caleme x alto"
"Pimentel x Vale Paraíso"
" Villa Muniqui x Várzea"
"Comary x Meudon"
"Rodoviária x Vale Alpino"
"Centro x Canoas"

const linha = []
linha [0] = "10:  Rosário x Pimenteiras"
linha [1] = "20: Perpétuo x Fontes Santa"
linha [2] = "30:  Caleme x alto"
linha [3] = "40: Pimentel x Vale Paraíso"
linha [4] = "50: Villa Muniqui x Várzea"
linha [5] = "60: Comary x Meudon"
linha [6] = "70: Rodoviária x Vale Alpino"
linha [7] = "80: Centro x Canoas"

const prompt = require("prompt-sync")()
var numero = prompt("Digite o número do ônibus que está vindo: ")
var onibus = parseInt(numero) / 100 - 1;
var linha = linha[onibus];
console.log("esse onibus tem o trajeto "+ linha)

