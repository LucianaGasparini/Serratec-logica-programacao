// O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.
var prompt = require ("prompt-sync")();
var ang1 = prompt("Digite o primeiro ângulo: ");
var ang2 = prompt("Digite o segundo ângulo: ");
var ang3 = prompt("Digite o terceiro ângulo: ");

if (parseInt(ang1) + parseInt(ang2) + parseInt(ang3) == 180){
    console.log("O triângulo existe");
}else{
console.log("O triângulo não existe");
}