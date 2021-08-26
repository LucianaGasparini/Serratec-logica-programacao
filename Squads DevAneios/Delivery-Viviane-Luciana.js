/* Delivery de comida Japonesa "XingLing" iniciando suas atividades precisa contratar motoboy e,como tem uma certa urgência na contratação, não pode ficar perdendo tempo com currículos que não atendam aos requisitos da vaga. O objetivo é fazer uma pré-seleção e permitir que somente os candidatos que cumpram tais requisitos enviem seu currículo par ao RH.
Perguntas
Possui CNH categoria A ? Sim Não
CNH está na validade? Sim Não
Possui Experiência na área?

Se essas respostas acima foram verdadeiras, então o candidato está apto a enviarseu currículo para análise.
*/

var prompt = require ("prompt-sync")();
console.log("Recrutamento de Motoboy");
var cnh = prompt("Possui CNH categoria A ? Sim Não ");
var validadeCnh = prompt("CNH está na validade? Sim Não ");
var experiencia = prompt("Possui Experiência na área? Sim Não ");

if (cnh.toLowerCase() == 'sim' && validadeCnh.toLowerCase() == 'sim' && experiencia.toLowerCase() == 'sim'){
    console.log ("O Candidato está apto a enviar o seu currículo");
}else {
    console.log ("O Candidato não está apto.");
}