/*No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 
== Eleições 2020 ==
  Digite sua idade: 17
  Você já pode votar? True*/

var prompt=require("prompt-sync")()

console.log("==Eleições 2020==")

var idade = prompt("Digite a sua idade: ")


eleitor = idade >= 16
if (eleitor){
    console.log("Você já pode votar?", eleitor)
}
else{
    console.log("Você já pode votar?", eleitor)
}
