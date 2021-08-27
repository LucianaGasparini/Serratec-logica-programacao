//No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor.//
var prompt =require("prompt-sync")()
var somajogador = 0



while (somajogador < 21){
    var numeroJ = prompt("Jogador entregue uma carta.");
     somajogador = somajogador + parseInt(numeroJ)

} 
if (somajogador == 21){
        console.log ("Somatório: "+ somajogador + " Jogador vencedor!!");
    }else{
        console.log ("Somatório: "+ somajogador + " Carteador vencedor!!!");
    }