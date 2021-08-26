//*# Serratec - Parque Tecnológico Região Serrana
//Lógica de Programação - Prof. Moises do Amaral Baddini
//Atividade: Elicitação de Requisitos
// Autor (Descrição): Guilherme
// Squad de Origem (Requisito): DevAneios (Squad 3)
//Arquivo: Enunciado Guilheme.js
//Data: 26/08/2021 

//Encunciado
/*Calculadora de Páginas de leitura vs. Deadline (prazo final)
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo usuário não pode ser o mesmo da recomendação.
*/

var prompt = require("prompt-sync")()
console.log("Prezado leitor,");

var livro = prompt("Que livro você está lendo no momento? ");

var paginas = -1000
while (paginas < 1){
    paginas = prompt("Quantas páginas seu livro tem? ");
    if (paginas < 1){
        console.log ("Número informado de páginas inválido, digite novamente.");
    }
}
var dias = prompt("Em quantos dias você precisa ler o livro");

var pag_dia

if (paginas > 1 && dias > 1){
pag_dia = paginas / dias
console.log ("Você precisará ler " + Math.ceil(pag_dia) + " páginas por dia.");
}
if (paginas <= 0){
    console.log ("Número de páginas inválido");
}
else if (paginas <= 100){
    
    if (livro == "Revolucao dos Bichos"){
        console.log("No término do seu livro sugerimos a leitura de O Alienista");
    }

    else if (livro == "O Alienista"){
        console.log("No término do seu livro sugerimos a leitura de Revolucao dos Bichos");
    }
    else{
        console.log("No término do seu livro sugerimos a leitura de: Revolucao dos Bichos e O Alienista");
    }

}
else 
    if (paginas >100 && paginas <500){
        

        if (livro == "O Homem Invisivel"){
            console.log("No término do seu livro sugerimos a leitura de Eu, Robo");
        }
        else if (livro == "Eu, Robo"){
            console.log("No término do seu livro sugerimos a leitura de O Homem Invisivel");
        }
        else{
        console.log("No término do seu livro sugerimos a leitura de:O Homem Invisivel e Eu, Robo ");
    }
}
else {
    if (livro == "Moby Dick"){
        console.log("No término do seu livro sugerimos a leitura Duna");
    }
    else if (livro == "Duna"){
        console.log("No término do seu livro sugerimos a leitura de Moby Dick");
    }
    else{
    console.log("No término do seu livro sugerimos a leitura de: Moby Dick e Duna ");
    }
}