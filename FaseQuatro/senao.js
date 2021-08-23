/*if(true)
instrução;
else//(false)
instrução_dois;
*/

var texto = "Maria";

/*
if (retorno)
console.log()
texto = "verdade"
saudacao()
if () 
*/

const limite = 8;
var qtde = 5;

var liberada = (qtde < limite);
var proximo = (qtde == 7);
// Encadeamento, aninhamento

if (liberada)
    if (proximo)
console.log("Não deixe entrar se estiver acompanhado");
    else
    console.log("Entrada liberada");
else
console.log("Aguarde mais um pouco");
/*
{
    comando1;
    comando2;
    comandoN;
} */

const limite = 8;
var qtde = 6;

var liberada = (qtde != limite);
var proximo = (qtde <= 7);
if (liberada) 
    console.log("Entrada liberada");
    if (proximo) {
    console.log("Não deixe entrar se estiver acompanhado");
}
else
console.log("Aguarde um pouco");
