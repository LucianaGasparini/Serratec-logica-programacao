//Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).


repete = true
var prompt = require("prompt-sync")();
console.log ("Ímpar Par");

while (repete){
   
    var numero = prompt("Digite um número:  ");
    
    if(numero % 2 == 0 ){
        console.log("Este número "+ numero + "  é par");
        
    }
    
    
    else{
        console.log("Este número "+ numero + "  é ímpar");
        repete = true;
           
    }
}     