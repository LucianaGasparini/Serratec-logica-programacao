//*# Serratec - Parque Tecnológico Região Serrana
//Lógica de Programação - Prof. Moises do Amaral Baddini
//Atividade: Elicitação de Requisitos
// Autor (Descrição): Luciana Gasparini
// Squad de Origem (Requisito): DevAneios (Squad 3)
//Arquivo: Enunciado Luciana.js
//Data: 26/08/2021 

// A Lanchonete Java'S solicitou ao Squad DevAneios um algoritimo que apresentasse ao seu cliente um cardápio com a lista de lanches e preços para sua escolha e ao final do seu pedido lhe fosse gerada a conta com a mensagem "Favor dirija-se ao caixa".


var prompt = require("prompt-sync")()
console.log("Cardápio Lanches Rápidos e Bebidas");
console.log("Lanches:\n 1 - Brioche R$ 5,75 \n 2 - Coxinha R$ 3,55 \n 3 - Kibe R$ 4,60, \n 4 - Sanduiche natural R$ 6,80");
var lanche = prompt("Indique o número da sua comida escolhida:  ");
console.log("Bebidas:\n 1 - Refrigerante Lata R$ 6,99,\n 2 - Água mineral R$ 2,99,\n 3 - Refresco R$ 4.99 \n 4 - Suco Natural R$ 7,99");
var bebida = prompt("Agora indique o número da sua bebida escolhida: ");

var conta;
// Neste switch foi atribuido os valores dos lanches, de acordo com os demonstrados no cardápio, para que somado ao valor das bebidas seja totalizado o valor da conta.

switch(lanche){
            
    case "1":
        conta = 5.75;
        break;
        
    case "2":
        conta = 3.55;

        break;
    case "3":
        conta = 4.60;
        break;
    case "4":
        conta = 6.80;
        break;
    default: 
        conta = 0
        console.log ("Lamento, não oferecemos a opção de lanche ", lanche, " indicada.");
}

// Foi atribuido ao switch os valores das bebidas, somadas a variável "conta", correspondente ao lanche.
switch(bebida){
    case "1":
        conta = conta + 6.99;
        break;
    case "2":
        conta = conta + 2.99;
        break;
    case "3":
        conta = conta + 4.99;
        break;
    case "4":
        conta = conta + 7.99;
        break;
       
     default: 
     console.log ("Lamento, não oferecemos a opção de bebida ", bebida, " indicada.");
}

    console.log("O valor da conta é R$ " + conta);
    console.log('Favor dirija-se ao caixa.');
