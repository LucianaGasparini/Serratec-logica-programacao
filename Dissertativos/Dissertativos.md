# Aula zero #
## Entendendo o ambiente ##

Dissertativos

**Qual o fluxo de funcionamento do computador? Ou ainda, como devemos organizar nosso pensamento na hora de escrever algoritmos?**
Entrada, processamento e saída
**Qual o algoritmo utilizado por estudantes, por tradição, para escrever seu primeiro programa?**
“Olá Mundo!” (Hello World)
**Qual a tecla de atalho amiga do programador? Aquela que salva sua vida?**
Ctrl+S
**Quando criamos um novo programa JavaScript, como precisamos salvar os arquivos?**
Devemos salvar com a extensão .js
**Podemos dizer que a linguagem da máquina é a mesma linguagem de programação? Justifique.**
Não.   A linguagem de programação é formada por um conjunto de regras sintáticas e semânticas que formam um código fonte, este por sua vez quando compilado é transformado em linguagem de máquina que é entendido pelo computador.
**Segundo o professor, qual o percentual de importância do zero na programação?**
100%, pois o primeiro termo do vetor tem índice zero.
**No editor de código, o que acontece ao digitar Shift + S?**
Possibilita a escrita da letra “s” em caixa alta “S”

# #Aula 1 #
## Conceitos básicos ##

Dissertativos

**Qual analogia nós usamos na aula para representar a memória do computador, seus espaços, e conteúdos?**
Analogia do estacionamento
**O que entendemos como ‘bloco de comandos’?**
São códigos agrupados, ou seja, partes de um código serão executados em um mesmo momento.
**Quais palavras reservadas (ou símbolos) usamos para delimitar esse bloco, em diferentes linguagens?**
Chaves ({})
**O que significa para o programa a estrutura sequencial?**
Comandos de um algoritmo executados numa sequência pré-estabelecida. Cada comando é executado após o término do comando anterior.
**Qual o símbolo utilizado para terminar instruções?**
Ponto e vírgula (;)
**Via programação, como exibir uma mensagem simples na tela?**
Utilizando o comando console.log com o texto desejado digitado entre aspas dentro de parênteses
**O que fazer quando ao executar um programa, perceber que o código que tinha sido digitado “não apareceu no console”? Qual elemento visual do editor ajuda a perceber isso?**
Ao executar um programa, o elemento Run Code sinaliza no terminal a variavél com defeito para ajuste.
**Qual facilidade o Coderunner apresenta para executar apenas um trecho do código?**
Fazendo a marcação deste trecho, é possivel rodá-lo independente dos demais para validação de execução.
**Faz diferença nas linguagens de programação próxima do C, como Java ou JavaScript, escrever instruções em maiúsculas ou minúsculas? Justifique.**
Sim, o editor diferencia letras maiúsculas e minúsculas, exemplo letra "A" é diferente de letra "a"
**O que faz o comando console.log? Qual a diferença entre este e o document.write?**
console.log : escreve uma mensagem no console da web, exibido nas ferramentos de desenvolvedores do navegador. documento.write é uma função do javascript que escreve no html da página. Basicamente, ele pega uma página e sobrescreve seu conteúdo. Os dois fazem coisas distintas, a forma ideal de usar é de acordo coma demanda.
**Como fazer uma quebra de linha no texto do console?**
utilizando o caractere "\n"
**Para que serve a instrução “use strict” no início do arquivo Js?**
O use strict elimina alguns erros silenciosos que passariam batido do JavaScript e os faz emitir erros. Além disso, essa forma corrige alguns erros que tornam o JavaScript difícil de ser otimizado, então algumas vezes os códigos no modo estrito rodam mais otimizados e velozes do que os códigos no 'modo normal.
**Escreva a tecla de atalho, ou botão, ou item de menu no VSCode para:**
**Salvar todos os documentos abertos** Ctrl + k depois S
**Executar o programa (No Coderunner)** Ctrl + Alt + N
**Duplicar uma linha (criar uma cópia da linha corrente)** Shift + Alt + seta para baixo
**Abrir um cursor multilinha (digitação múltipla)** Ctrl + Shift +Alt e seta
**Exibir o painel de comandos** Ctrl + Shift + c
**Alternar o modo de exibição do texto, em linha contínua ou com quebra ao final da página** Alt + z
**Adicionar ou remover comentário na linha corrente** Shift + Alt + A
**Exibir a lista dos atalhos.** Ctrl + K + S
**Para quê serve a indentação? Ela influencia o programa?**
Para arrumar as linas e formatar os códigos, influencia somente na organização para visualização do programador.
**Existe diferença entre a programação embutida no HTML (utilizando a tag script) e o arquivo com código JavaScript separado?**
Não existe diferença, pode-se importar um arquivo js para html e tambémfazer um script dentro html.

## #Aula 2 ##

## Tipos de dados | atribuição

Dissertativos

**Para cada informação abaixo, classifique segundo o tipo de dados.**
**Quantidade de vendedores da loja** Integer
**Nome da rua, com número e complemento**string
**Preço do etanol comum** Real
**Estado de iluminação de uma lâmpada** Boolean
**CEP do endereço, com hífen**string
**Mostrador com um dígito dentro do elevador, indicando o andar do prédio onde ele está passando**Integer
**Led que indica o pressionamento do botão do elevador**Boolean
**Data de aniversário do professor** Date
**Peso do prato na balança do restaurante** Float
**Número de bois no curral da fazenda** Integer
**Dia completo da páscoa nesse ano** Date
**Quantidade de laranjas na caixa** Integer
**Uma vogal minúscula** Char
**Título de um livro** String
**Limite do cartão de crédito** Real
**Horário de transmissão do jogo**  Timestamp
**Altura de um prédio** Float
**Páginas do caderno** Integer
**Sala de reunião está disponível (ou ocupada)** Boolean
**Alternativas do enunciado da questão de múltipla escolha** Char
**O que são tipos de dados?**
É uma combinação de valores e de operações que uma variável pode executar, o que pode variar conforme o sistema operacional e a linguagem de computador.
**Descreva os tipos de dados primitivos em programação, com o nome do tipo da informação e sua finalidade de armazenamento.**
INTEIRO: Representa valores numéricos negativo ou positivo sem casa decimal, ou seja, valores inteiros.
REAL: Representa valores numéricos negativo ou positivo com casa decimal, ou seja, valores reais. Também são chamados de ponto flutuante.
LÓGICO: Representa valores booleanos, assumindo apenas dois estados, VERDADEIRO ou FALSO. Pode ser representado apenas um bit (que aceita apenas 1 ou 0).
TEXTO: Representa uma sequencia de um ou mais de caracteres, colocamos os valores do tipo TEXTO entre " " (aspas duplas).
**Qual a característica (ou conceito) dos números inteiros que é muito importante na programação?**
Apesar de serem representáveis na classe dos números reais, são classificados como dados do tipo inteiro, por não possuírem parte fracionária, esta possibilidade é interessante por premitir uma economia no espaço de memória.
**O que são as palavras reservadas da linguagem?**
São componentes da própria linguagem e não podem ser redefinidas, ou seja, denominar elementos criados pelo programador.
**Em programação, o que são variáveis?**
Variável é um espaço na memória do computador destinado a um dado que é alterado durante a execução do algoritmo.
**Como são chamados os nomes de variáveis?** identicador
**O que significa “declarar uma variável”?**
Declarar uma variável é dizer ao programa: vou precisar armazenar um valor, separa um espaço da memória pra mim, e põe nele o nome do meu identificador.
**Posso criar duas variáveis como o mesmo “nome”, ou que, pelo menos para o programador, tenham o mesmo significado? Justifique.**
Não é possível criar duas variáveis com o mesmo nome, pois uma será substituta da outra, pode se usar um mesmo nome acrescentando um caractere a cada descrição para distinguir o identificador, caso seja opção do programador.
**O que é uma atribuição?** Declarar um valor a um identificador
**Qual palavra utilizamos como sinônimo do comando do sinal de atribuição?** "recebe"
**Quando atribuímos um novo valor a uma variável, o que acontece com o valor que ela já possui?**
O primeiro valor é somado com o segundo valor.
O primeiro valor vai para a variável seguinte.
**O primeiro valor é perdido, pois uma atribuição é uma substituição.**
**Qual a diferença do “ponto” e da “vírgula” no momento da escrita do código?**
O ponto é utilizado para contexto de string e para casas decimais,a virgula normalmente utilizada para acrescentar um identificador na descrição do código.
**O comando de escrita no console permite “misturar” vários tipos de dados? Em outras palavras: É possível escrever os valores de mais de uma variável, de tipos diferentes? Justifique.**
Sim é possível, desde que seja atribuido corretamente as variáveis no console.log.
**Para quê usamos comentários na programação?** Para facilitar a identificação explicação do código
**Quais os tipos de comentários existentes?** // e /* "" */

