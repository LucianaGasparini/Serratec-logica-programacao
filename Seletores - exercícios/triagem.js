/*A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.

Paciente: Moisés
Já vacinado: ok
[Triagem]
Sujeito a infecção? false
*/

var prompt = require("prompt-sync")();

var paciente = prompt("Qual o nome do paciente? ");
var vacinado = prompt ("Paciente já foi vacinado? Responda sim ou nao ")

console.log ("Paciente: ? "+ paciente );


var sujeitoInfeccao

if (vacinado == "sim"){
    console.log("Já vacinado: ok");
    sujeitoInfeccao = false;

    console.log("[Triagem]")
    console.log("Sujeito a infecção? "+ sujeitoInfeccao)


} else{

}

