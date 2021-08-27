
var alunos = []
var presente = []

alunos[0] = 'Adrian';
presente[0] = true;

alunos[1] = 'Andre Luiz';
presente[1] = true;

alunos[2] = 'Andre Ponte';
presente[2] = true;

alunos[3] = 'Antonio';
presente[3] = true;

alunos[4] = 'Beatriz';
presente[4] = true;

alunos[5] = 'Bruno';
presente[5] = true;

alunos[6] = 'Carolina';
presente[6] = true;

alunos[7] = 'Daniel';
presente[7] = false;

alunos[8] = 'Diego';
presente[8] = true;

alunos[9] = 'Eduardo';
presente[9] = true;

alunos[10] = 'Gilnei';
presente[10] = true;

alunos[11] = 'Guilherme';
presente[11] = true;

alunos[12] = 'Gustavo';
presente[12] = true;

alunos[13] = 'Gustavo Ponte';
presente[13] = true;

alunos[14] = 'Higor';
presente[14] = true;

alunos[15] = 'Karina';
presente[15] = true;

alunos[16] = 'Leandro';
presente[16] = true;

alunos[17] = 'Luana';
presente[17] = true;

alunos[18] = 'Luciana Evangelista';
presente[18] = true;

alunos[19] = 'Luciana Gasparini';
presente[19] = true;

alunos[20] = 'Marcella';
presente[20] = true;

alunos[21] = 'Marcos';
presente[21] = true;

alunos[22] = 'Marcos Vinicius';
presente[22] = true;

alunos[23] = 'Matheus';
presente[23] = true;

alunos[24] = 'Nathan';
presente[24] = true;

alunos[25] = 'Nuria';
presente[25] = true;

alunos[26] = 'Pedro Henrique';
presente[26] = true;

alunos[27] = 'Raquel';
presente[27] = true;

alunos[28] = 'Rodrigo C';
presente[28] = true;

alunos[29] = 'Rodrigo P';
presente[29] = true;

alunos[30] = 'Vanderson';
presente[31] = true;

alunos[32] = 'Victor';
presente[32] = true;

alunos[33] = 'Viviane';
presente[33] = true;




var qtde = alunos.length;
console.log("A quantidade de alunos " + qtde);

var nome = "Luciana Gasparini"
var posicaoLista = -1

// posiçao do aluno "nome"

for (var i = 0; i < qtde; i++) {
    // critério de busca
    if (alunos[i] == nome){
    posicaoLista = i;    
    break;
    }
}

if (posicaoLista == -1) {
    console.log("não encontrei o aluno " + nome + " na listagem.");
    
}
else{
    console.log("O aluno " + nome + " está na lista na posição "+ posicaoLista); 
}

// contagem dos presentes

var total = 0;
for (var i = 0; i < presente.length; i++) {
    // critério 
    if (presente[i]){
    total++
    }
    
    
}
console.log ("O total de presentes é " + total)
var ausentes =[];

for (let i = 0; i < alunos.length; i++){
    const faltou = ! presente[i];
    if (faltou){
        nome = alunos[i]
        ausentes.push(nome);
    }
}

console.log("Os nomes dos ausentes abaixo:");
console.log(ausentes);
   
 

