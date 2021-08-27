
var alunos = []
alunos[0] = 'Viviane';
alunos[1] = 'Victor';
alunos[2] = 'Vanderson';
alunos[3] = 'Samuel';
alunos[4] = 'Rodrigo C';
alunos[5] = 'Rodrigo';
alunos[6] = 'Raquel';
alunos[7] = 'Rafael';

var presente = []

presente[0] = true;
presente[1] = true;
presente[2] = false;
presente[3] = true;
presente[4] = false;
presente[5] = true;
presente[6] = false;
presente[7] = true;

var alunoPr = 0;
var alunoAus = 0;

for (var x = 0; x < 8; x++) {
    if (presente[x] == true){
        console.log("aluno ", alunos[x], " presente.");
        console.log("------------");
        alunoPr++;
        console.log(alunoPr);
    }
}
for (var y = 0; y < 8; y++){
    if (presente[y] == false){
    console.log("aluno", alunos[y], "ausente.");
    alunoAus++
    console.log("------------");
    } 
}
    