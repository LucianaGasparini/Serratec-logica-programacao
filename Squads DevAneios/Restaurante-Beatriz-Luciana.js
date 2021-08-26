// O restaurante Zépa conta com um algoritmo de tecnologia de ponta para clientes fazerem seus pedidos de forma prática e rápida. O cardápio conta com hambúrguer vegetariano, batata frita com queijo e refrigerante (respectivamente nos valores R$35, R$15 e R$15). 
var prompt = require("prompt-sync")();

console.log ("Prezado Cliente seja bem vindo ao Restaurante Zepa");

console.log ("1 - Hamburgue Vegetariano R$ 35\n2 - Batata frita com queijo R$ 15\n3 - Refrigerante R$ 15\n4 - Finalize seu pedido");
// cardapio recebeu númro diferente de 4 que torna o while verdadeiro, portanto a cada digitação diferente ele continuara repetindo até o fechamento do pedido.
var cardapio = 5
while (cardapio != 4){ //faz uma condição verdadeira até se tornar falsa
    cardapio = prompt("Digite o número referente o seu pedido:   ");

var opcao1 = "Hamburgue Vegetariano";
var opcao2 = "Batata frita com queijo";
var opcao3 = "Refrigerante";
var escolha;

switch(cardapio){
    
    case "1":
        escolha = opcao1;
        break;

    case "2":
        escolha = opcao2;
        break;      

    case "3":   
        escolha = opcao3;
        break;

    case "4":
        break;

    default:
        console.log("A opção digitada não existe, refaça seu pedido com as opções acima.");
    
}
    if (cardapio > 0 && cardapio < 4){
        console.log("Seu pedido foi:  "+ escolha);
}
    if (cardapio == 4){
        console.log("Pedido finalizado.");
}
}