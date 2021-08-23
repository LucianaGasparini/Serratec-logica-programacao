//O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.

var cliente;
var prompt = require ("prompt-sync")();
var total = prompt("Qual o total de pessoas na loja?");

if (total < 20){
    console.log ("O cliente está autorizado a entrar na loja");
}
else {
    console.log ("O cliente não pode entrar na loja")
}



