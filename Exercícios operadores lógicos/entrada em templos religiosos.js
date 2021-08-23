// Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.

var prompt = require ("prompt-sync")();
var temperatura = prompt("Digite a temperatura: ");
var mascara = prompt("Usa máscara (S ou N) :");
var entrada;

 if (parseFloat(temperatura) <= 37.5 && mascara == "S"){
    entrada = true;
}else {
    entrada = false;
}
console.log ("Autorizar a entrada? ", entrada);