//*# Serratec - Parque Tecnológico Região Serrana
//Lógica de Programação - Prof. Moises do Amaral Baddini
//Atividade: Elicitação de Requisitos
// Autor (Descrição): Rodrigo C
// Squad de Origem (Requisito): DevAneios (Squad 3)
//Arquivo: Enunciado Rodrigo.js
//Data: 26/08/2021 

//Encunciado


/* Filhinho do Eduardo e Mônica ficou de recuperação?
O algoritmo é bem simples. Digitar 4 notas, ou seja, precisamos receber 4 dados do usuário, e salvar em 4 variáveis diferentes. Além das notas, precisamos calcular a sua média que deve ser MAIOR ou IGUAL a 7. SE a soma das 4 notas for maior ou igual a 7, a família poderá viajar, caso contrário a criança terá que fazer prova de recuperação.*/
var prompt = require("prompt-sync")();
console.log ("Avaliação Escolar");

console.log("Digite a nota correspondente a cada bimestre, compreendidas entre 0 a 10.");

var nota1 = prompt ("Digite a nota do primeiro bimestre: ");
var nota2 = prompt ("Digite a nota do segundo bimestre: ");
var nota3 = prompt ("Digite a nota do terceiro bimestre: ");
var nota4 = prompt("Digite a nota do quarto bimestre: ");

var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4
console.log("Média do Filho é " + media);

if (media >= 7){
    console.log ("Filhinho aprovado, família poderá viajar.");
}
else{
    console.log ("Filhinho tera que fazer prova de recuperação.");
}
