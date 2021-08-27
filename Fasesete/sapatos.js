
var sapato = []
sapato[0] = "Sandalia"
sapato[1] = "Mocacim"
sapato[2] = "Bota"
sapato[3] = "chuteira"
sapato[4] = "Rasteirinha"
sapato[5] = "Sapatilha"
sapato[6] = "Tamnco"
sapato[7] = "Kichute"
sapato[8] = "tenis"
sapato[9] = "havainas"


var pesquisa = "Bota"
var encontrei = -1

for (var i = 0; i < sapato.length; i++) {
    if (sapato[i] == pesquisa){
        encontrei = i
        break;
    }
}
if (encontrei > -1){
    console.log("Seu sapato está na gaveta " + encontrei);

} 
    else {
    console.log ("Não encontrado")
}
