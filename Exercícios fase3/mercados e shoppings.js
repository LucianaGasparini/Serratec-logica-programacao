/*É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?.*/

var compra = 1890
var cupon = compra / 190

console.log("Alice comprou R$ "+ (compra).toFixed(2) + " tendo direito a " + Math.trunc(cupon) + " cupons");