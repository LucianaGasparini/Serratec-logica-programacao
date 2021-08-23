//O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.

var prompt = require("prompt-sync")()

var x = prompt("Escreva o número que será elevado ao quadrado: ");

var y = parseInt(x) * x;
console.log("O quadrado de  ", parseInt(x), " foi ", y);