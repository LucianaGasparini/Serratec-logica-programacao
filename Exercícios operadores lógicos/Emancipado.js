// É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.

var prompt = require ("prompt-sync")();
var sexo = prompt("Sexo: ");
var idade = prompt("Ano de nascimento: ");
var emancipado = false;

var data = new Date().getFullYear()

if (data - parseInt(idade) >= 21){
    emancipado = true;
}else if (data - parseInt(idade) >= 18){
    if (sexo == "Masculino"){
        emancipado= true;
    }
}else{
    emancipado= false
}
console.log ("Cidadão emancipado? ", emancipado);
