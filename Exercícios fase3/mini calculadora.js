//Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.

prompt = require("prompt-sync")()

var numero1 = prompt(" Digite o primeiro número: ");
var numero2 = prompt(" Digite o segundo número: ");

console.log("Soma da operação é: " , (parseInt(numero1) + parseInt(numero2)));

console.log("Diferença da operação é: " , (numero1 - numero2));


console.log("Multiplicação da operação é: " , (numero1 * numero2));

console.log("Divisão da operação é: " , (numero1 / numero2));