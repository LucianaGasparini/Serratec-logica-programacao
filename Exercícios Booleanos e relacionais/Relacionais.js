//O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.
var prompt=require("prompt-sync")()

var A = prompt(" Digite o valor de A: ")
var B = prompt(" Digite o valor de B: ")
var comparacao

comparacao = B > A
if (comparacao){
console.log(" B é maior que A")
}
else{
console.log("A é maior que B.")
}

