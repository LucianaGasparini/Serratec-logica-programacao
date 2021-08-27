//O abecedário da Xuxa agora segue cantando a definição musical até que a criança decida parar de ouvir, pressionando o zero.//

repete = true
var prompt = require("prompt-sync")();

while (repete){
    console.log ("Abecedario da Xuxa...")
    var crianca = prompt("Deseja continua ouvindo? sim nao ")
    
    if(crianca.toLowerCase() == "sim"){
        repete = true
    }
    else{
        repete = false
    }
}       console.log('fim')