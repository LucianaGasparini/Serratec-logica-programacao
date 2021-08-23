//Relacionais

var aluno = "";

var presente = (aluno != "")

console.log("Aluno está presente?");
console.log(presente);


//Lógicos
var maria = true;
var carol = true;

//Quero saber se Ambos alunos estão presentes
var estaoPresentes = maria && carol;
//var estaoPresentes = (true && true);
console.log("estao presentes?", estaoPresentes);

//Lógicos
var maria = true;
var carol = false;

//Quero saber se Ambos alunos estão presentes
var estaoPresentes = maria && carol;
//var estaoPresentes = (true && true);
console.log("estao presentes?", estaoPresentes);


//Operador OU
var servidorDragao = true;
var serverGuerrilha = true

var entrar = servidorDragao || serverGuerrilha;
console.log("estou conectado no discord?", entrar);

//Negação not não !bang exclamação

var prof = false;
var serverGalera = ! prof;

console.log("Posso entrar no server da geral?", serverGalera);


//Negação not não !bang exclamação

var prof = true;
var serverGalera = ! prof;

console.log("Posso entrar no server da geral?", serverGalera);

//var resposta = true && true && true;
// var motoristaProfissional = A e B e C;

var moto = true;
var carro = true;
var vuc = true;

var motoristaProfissional = moto && carro && vuc;
console.log("É motorista profissional?", motoristaProfissional);

