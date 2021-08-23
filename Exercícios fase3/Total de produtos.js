// Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.

prompt = require("prompt-sync")()

var totalProdutos = prompt ("Quantos produtos irá comprar? ")

console.log("Parabéns por comprar " + totalProdutos + " produtos!")
