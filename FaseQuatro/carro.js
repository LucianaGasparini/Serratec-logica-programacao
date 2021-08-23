
/*//var prompt = require("prompt-sync")()    npm install prompt-sync
/*
Requisito:
Criar um programa para saber se o carro está ligado ou desligado
*/
var prompt = require("prompt-sync")() 
//Entrada
console.log('responda algumas perguntas com "sim" ou "não":');
var movimento = prompt("O veiculo esta em movimento");
var barulho = prompt("Está ouvindo barulho do motor?");
var luzes = prompt("As luzes do painel, ou farol, estão acesas?");

//Processamento
// conceito do curto circuito
var ligado = (movimento == "sim") || (barulho == "sim") && (luzes == "sim");
// o resultado das luzes depende do resultado do movimento ou barulho.
//Saida
console.log("Concluimos que:Seu carro está ligado?", ligado);
