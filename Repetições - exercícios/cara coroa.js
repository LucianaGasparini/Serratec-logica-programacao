//O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console.//


repete = true
var prompt = require("prompt-sync")();

while (repete){
    console.log ("Jogo do Cara e Coroa")
    var moeda = Math.floor(Math.random(moeda < 20));
    
    if(moeda == "7"){
        console.log("Parabéns você acerto coroa = 7!")
        repete = false
    }
    
    
    else{
        console.log("Você errou, digitou "+ moeda + " jogue novamente.")
        repete = true
           
    }
}     