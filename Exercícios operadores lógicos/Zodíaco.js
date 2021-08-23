// O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.
var prompt = require("prompt-sync")();
var mes = prompt("Mês do seu aniversário: ");
var dia = prompt ("Dia do seu aniversário: ");
var inteligente;

mes = parseInt(mes);
if (mes == 01 || mes == 2){

    if (mes == 1 && dia > 20){
        inteligente = true;
    }
    else if (mes == 2 && dia < 20){
        inteligente = true;
    }else {
        inteligente = false;
    }

}else {
    inteligente = false;
}
console.log ("Você é inteligente? ", inteligente);