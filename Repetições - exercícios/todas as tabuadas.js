/*Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.
Tabuada de: 7
7 x 1 = 7
7 x 2 = 14
*/

//"use strict";

console.log("Todas as tabuadas!");

for (var tabuada = 1; tabuada <= 10; tabuada++){
    console.log("Tabuada de " + tabuada + ":");
    
    for (var i = 1; i <=10; i++){
        var resultado = tabuada * i;
        var resposta = tabuada + " x " + i + " = " + resultado;
        console.log(resposta);
        
    }
    console.log("------------");
}