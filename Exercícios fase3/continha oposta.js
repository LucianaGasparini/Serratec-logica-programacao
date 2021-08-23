// A “continha oposta” lê um número e mostra seu valor negativo.


var prompt = require ("prompt-sync")();
var numero = prompt("Digite um número ")

numero = parseInt(numero)
if (numero > 0){
    console.log(numero - 2*numero)
}
else if(numero < 0){
    console.log(numero - 2*numero)
}
else {
    console.log(" Zero elemento neutro não tem positivo e negativo.")
}