//var prompt = require("prompt-sync")()    npm install prompt-sync
/*
Requisito
Para saber se o motorista é profissional, ele precisa ser habilitado nas categorias:
A, B, e C.
*/

//Entradas
//prompt
var prompt = require('prompt-sync')();
//Entradas
var A = prompt("Possui habilitação A? Digite s ou n");
var B = prompt("Possui habilitação B? Digite s ou n");
var C = prompt("Possui habilitação C? Digite s ou n");

//Processamento
// Primeiro particularizar, depois, generalizar
var resposta = true;
******

//saida
console.log("Voce é motirista de verdade?", resposta);

//Processamento
//!Primeiro particularizar, depois, generalizar.
var motoca = A == "s" || A == "Sim";
var carro = B == "s" || B == "Sim";
var vuc = C == "s" || C == "Sim";

// && || lógicos
var resposta = motoca && carro && vuc;

// saida
console.log("Você é motorista de verdade?", resposta);

