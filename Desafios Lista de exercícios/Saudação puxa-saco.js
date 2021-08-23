/*O programa 'Saudação puxa-saco' faz todos os cumprimentos do dia de uma vez só, para a semana toda! Serão mostradas as três mensagens de tela, uma após a outra, por dia, de segunda a sexta, cada dia em uma linha.*/

//Cumprimentos da Semana

var dia_semana = 0
var cumprimentos = "Bom dia, boa tarde e boa noite!"

for (dia_semana = 0; dia_semana < 5; dia_semana++){
    switch(dia_semana){
        case 0:
            console.log("Segunda-feira: ");
            break;
    
         case 1:
            console.log("Terça-feira: ");
            break;
    
        case 2:
            console.log("Quarta-feira: ")
            break;
    
        case 3:
            console.log("Quinta-feira: ")
            break;
    
        case 4:
            console.log("Sexta-feira: ")
            break;
    
        case 5:
            console.log("Segunda-feira: ")
            break;
    
    }
    console.log(cumprimentos + "\n")
}


