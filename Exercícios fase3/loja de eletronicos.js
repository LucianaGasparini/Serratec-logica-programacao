/*Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.*/

var jogos = 345
var videogame = 1545

var total = jogos + videogame
var juros = total * 1.015

console.log(" o Valor a ser pago é R$ " + (total.toFixed(2)) + " podendo ser pago em 03 parecelas sem juros de R$ " + (total / 3).toFixed(2));
console.log(" o Valor a ser pago é R$ " + (total.toFixed(2)) + " podendo ser pago em 05 parecelas sem juros de R$ " + (total / 5).toFixed(2));
console.log(" o Valor a ser pago é R$ " + (juros.toFixed(2)) + " podendo ser pago em 10 parecelas com juros de R$ " + (juros / 10).toFixed(2));

