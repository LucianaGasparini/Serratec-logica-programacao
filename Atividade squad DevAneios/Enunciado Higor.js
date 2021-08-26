//*# Serratec - Parque Tecnológico Região Serrana
//Lógica de Programação - Prof. Moises do Amaral Baddini
//Atividade: Elicitação de Requisitos
// Autor (Descrição): Higor
// Squad de Origem (Requisito): DevAneios (Squad 3)
//Arquivo: Enunciado Higor.js
//Data: 26/08/2021 

//Encunciado

/*
Criar um Alerta de estoque para que quando algum item estiver abaixo de algum limite proposto, vai ficar retornando mensagem de alerta e caso o produto não esteja nesse limite ficaremos com mensagem de quantidade suficiente, será importante ao final da mensagem conter a quantidade de produtos ainda restante, os produtos são retirados do estoque 1 vez por dia.
+INSTRUÇÕES+
A Cada produto perguntar (`Quantidade total de compras do (O NOME DO PRODUTO): (SUA QUANTIDADE)`)
Perguntar abaixo ('Dia Da Compra: ')
Quando Algum dos itens Estiver Abaixo de 7 UNIDADES Vai Receber Uma Mensagem ('Lembrete Comprar Produto e (O NOME DO PRODUTO)').
Caso não tenha atingido esse número retorna ('Quantidade Suficiente')
Se Caso tenha comprado produto demais para o mês irá retornar um valor negativo e sua mensagem vai ser (('**LEMBRETE OS DIAS NEGATIVOS SÃO QUANTIDADES EXTRAS DO PRODUTO**'))
A Cada dia que for retirado uma unidade irá retornar ('No' NumeroDoDia 'º Dia após nossa compra teremos,' X 'Unidades de: ' E o Nome do produto)
LISTA PRODUTOS NO ESTOQUE QUE VOCÊ PODE UTILIZAR:
Amido 
Farinha 
*/

var prompt = require("prompt-sync")();
var amido = prompt("Quantos pacotes de Amido deverão ser comprados? ");
var atual = prompt("Que dia é hoje? ")
var dia = prompt("Qual a data de compra? ");




if (amido < 7){
    console.log ("Lembrete, comprar Amido");
}
if (amido == 7) {
    console.log("Quantidade suficiente de Amido");
    
}

if (amido >= 10){
    var dias = dia - atual
    var estoqueamido = amido - dias
    console.log ("No" , dia  ," teremos ", estoqueamido,  " pacotes de amido");
}


//produto 2
var farinha = prompt("Quantos pacotes de farinha deverão ser comprados? ");
var atual = prompt("Que dia é hoje? ")
var diaFarinha = prompt("Qual a data de compra? ");
if (farinha < 7){
    
    console.log ("Lembrete, comprar Amido");
   
}
    if (farinha == 7) {
        console.log("Quantidade suficiente de Amido");
       
    }

if (farinha >= 10){
    var dias1 = diaFarinha - atual
    var estoqueFarinha = farinha - dias1
 
    console.log ("No" , diaFarinha ," teremos ", estoqueFarinha,  " pacotes de farinha.");
    
}