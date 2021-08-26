//O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.//

var prompt = require ("prompt-sync")();
var celsius = prompt("Digite a temp");

var fahreheit = 0

fahreheit = (160 + 9 * celsius)/ 5
console.log ("temperatura em escala Fahrenheit é ", fahreheit,"º")

