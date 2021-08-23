//O sistema “Betmais” organiza as apostas de seus amigos. Você irá solicitar no grupo do Discord, ou whatsapp, que cada amigo lhe fale um número entre 1 e 10. Quando você receber todos os números, então irá criar uma variável e atribuir nela os valores, digitando na seguinte ordem: Os pares são somados, os ímpares subtraídos. O programa irá imprimir o resultado, para você repassar aos amigos.

prompt = require("prompt-sync")()

var i;
var soma = 0
var subtracao = 0

for(i = 0; i < 10; i++){
    var numero = prompt("Fale um número de 1 a 10: ");
    if (numero % 2 == 0){
        soma = soma + parseInt(numero);
        }
    else 
    subtracao = subtracao - numero;
}
console.log("Soma dos pares:  ", soma);
console.log("Subtraçao dos ímpares:  ", subtracao);