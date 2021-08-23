/*O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a partir de zero.
*/
var multiplos = 0
var mils = 1001
var cont = 0


while (cont < 4){
    if (mils % 4 == 0){
        cont++;
        multiplos = multiplos + mils
        console.log (multiplos)
    }
    mils++;
}

var primos= 0
var soma = 0
var num = 2
var i = 1
while (primos < 4){

    for (i = 1; i <= num; i++){
        if (num % i == 0){ 
            primos++;
            console.log ("primos", primos)
        }
    }
        if (primos == 2){
        soma = soma + num
        console.log("soma", soma)
        }

        num++;
        //primos = 0;
}
console.log ("Resultado: ", multiplos-soma)