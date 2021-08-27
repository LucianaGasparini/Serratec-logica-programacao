/*O jogo será todo em modo texto. Nada de cores, gráficos 3D ou exigências de uma poderosa placa de vídeo. Quanto menos você se preocupar com a aparência do dragão, e mais se dedicar a muita leitura de texto puro, mais você irá avançar pelas fases.*/


/*Abaixo segue a representação do dragão e das armas em modo texto.*/
var prompt = require("prompt-sync")();

console.log("Bravo Heroi, o grande e poderoso dragão 'Programaçãnção' esta vindo para destruis o mundo, e só você podera nos salvar!");
console.log("─────▄████▀█▄");
console.log("───▄█████████████████▄");
console.log("─▄█████.▼.▼.▼.▼.▼.▼▼▼▼");
console.log("▄███████▄.▲.▲▲▲▲▲▲▲▲")
console.log("████████████████████▀▀")

console.log ("Escolha uma das seguintes armas: (Sapato) 👠, (Espada) ⚔️, e (Faca) 🔪");

var arma = prompt("Digite S, E ou F: ");

var texto = "";
var sorteio = math.random() * 3 + 1;

console.log(sorteio);

//mapa
const armas = ["S" , "E", "F"];
var dragao = armas[sorteio];

//Sapato ganha Faca, Faca ganha de Espada, Espada ganha de Sapato

if (dragao == arma){
    texto = ("Ninguem vai ganhar, ningém vai perder... vai todo mundo perder");
}