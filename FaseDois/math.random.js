[08:18, 18/08/2021] +55 21 99793-4789:  Estudar a função Math.random();

//console.log(Math.random());
// Gera números aleatórios entre 0 (inclusivo) 1 (exclusivo).
// Números gerados com 16 casas decimais;
// Ex.: Jogos e sorteios.

//console.log(Math.random() * 2);
// Gera números aleatórios entre 0 e 2

//var aleatorio = Math.floor(Math.random() * 4);
//console.log(aleatorio);
// Variável aleatorio recebe numero entre 0 e 4
// Math.floor função que arredonda o número decimal para inteiro e arredonda para baixo

//var aleatorio = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
//console.log(aleatorio);
// Antes de executar a multiplicação, é executada a expressão entre parenteses
// (4 - 0 + 1) gera os valores entre 0 e 4.999999...
// 4 é o valor máximo que vai ser gerado
// - 0 número mínimo a …
[08:19, 18/08/2021] +55 21 99793-4789: se alguém quiser tá aí... qualquer ajuda é só chamar

var magico = Math.random();
console.log(magico);
magico = magico * 6 + 1;
magico = Math.trunc(magico);
console.log(magico);