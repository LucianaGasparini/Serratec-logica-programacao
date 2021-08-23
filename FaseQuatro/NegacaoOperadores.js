//var prompt = require("prompt-sync")()    npm install prompt-sync
{
var prompt = require("prompt-sync")()
const limite = 8;
console.log("Tem uma pessoa na porta da loja querendo entrar.");
var qtde = prompt("quantas pessoas temos na loja agora?")
var permitirentrada = (qtde < limite);

console.log ("Entrada permitida?", permitirentrada);
}

var prompt = require("prompt-sync")()
const limite = 8;
console.log("Tem uma pessoa na porta da loja querendo entrar.");
var qtde = prompt("quantas pessoas temos na loja agora?")
var bloquear = (qtde >= limite);

console.log ("Impedir a entrada?", bloquear);

//codicionado ao true if
{
    //var prompt = require("prompt-sync")()
    const limite = 8;
    console.log("Tem uma pessoa na porta da loja querendo entrar.");
    var qtde = 7;// prompt("quantas pessoas temos na loja agora?")
    var permitir = qtde < limite;
    var texto = "loja está cheia";
    //valor true
    //se verdadeiro executa; se false salta proxima linha
    if (permitir)
    texto = "Pode permitir a entrada do cliente que está na fila";
    console.log("console:", texto);
    }
    