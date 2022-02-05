// introdução ao ES6 04/02/2022

// js é uma liguagemm de tipagem fraca e dinâmica (Ex: junta string com número sem dar erro)
//exemplo

// var meuNumero = 20;
// var meuTexto = 'exemplo';
// document.writes(meuNumero + meuTexto);


// tipagem dinãmica vs estática
// no js com tipagem dinâmica não é necessárrio indicar qual é o tipo de variável

//currying é a tecnica de trasformar uma função com n paramentro em uma outra função que apenas 1 paramentro
//exemplo sem currying 

// function soma (a, b) {
//     return a + b;
// }
// para utilizar esse método 
// soma (2,3);
// soma (2,3);
// soma (2,4);


//exemplo com currying (para cada parametro, uma nova função)

// function soma (a) {
//     return function(b){
//         return a + b;
//     }
// }
// "a" sempre sera 2
// const soma2 = soma(2);

// console.log (soma2(2));
// console.log (soma2(3));
// console.log (soma2(4));


// aula dia 05/02/2022

// tipo de variavel SYMBOL permite criar valores únicos

// funções com String

// .length retorna a quantidade de caracteres de uma palavra
const textSize = 'texto'.length;
console.log(textSize);

// .splitt  retornaa um array qyuebrando a string por um delimitaador
const splitedText = 'texto'.split('x');
console.log('\nArray com as posições separadas por delimitador: ', splitedText);

// .replace busca por um valor e substitui por outtro
const replacedText = 'texto'.replace('Text', 'txeT');
console.log (replacedText);

//.slice retorna uma "fatia do valor"
const lastchar = 'texto'.slice(-1);
console.log (lastchar);

//0 é a primeira posição e -1 é eliminada
const allWithoutlastChat = 'texto'.slice(0,-1);
console.log(allWithoutlastChat);

const secondToEnd = 'Tesxo'.slice(1);
console.log(secondToEnd);

//.substr retorna n caaracters a partir de uma posição, 0 é o inicio e 2 a quantidade de caracteres
const twoCharsBeforeFirstPos = 'texto'.substr(0,2);
console.log(twoCharsBeforeFirstPos);  



//funções com números

const myNumber = 12.4032;

//converte para string
const numberAsString = myNumber.toString();
console.log(numberAsString);

// converte para 2 números fixos
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(fixedTwoDecimals);

// tranforma uma string  em float (permite número quebrado)
console.log (parseFloat('13.22'));

//tranforma uma string em int (não permite número quebrado)
console.log (parseInt('13.20')); 