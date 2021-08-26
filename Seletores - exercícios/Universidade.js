//Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.//
/*
Dia hoje: 10
Número do Boleto: 1234
Dia de pagamento: 11
Desconto na próxima mensalidade? true
*/

var prompt = require("prompt-sync")();
var pagamento = prompt ("Dia em que efetuou o pagamento do boleto? ")

var desconto = true

if (pagamento > 09 && pagamento < 14){
    console.log("Dia hoje: 10")
    console.log("Número do Boleto: 1234 ");
    console.log("Dia de pagamento: " + pagamento);
    console.log("Desconto na proxima mensalidade? "+ desconto);

}


