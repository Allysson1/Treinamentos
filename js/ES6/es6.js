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
// const textSize = 'texto'.length;
// console.log(textSize);

// // .splitt  retornaa um array qyuebrando a string por um delimitaador
// const splitedText = 'texto'.split('x');
// console.log('\nArray com as posições separadas por delimitador: ', splitedText);

// // .replace busca por um valor e substitui por outtro
// const replacedText = 'texto'.replace('Text', 'txeT');
// console.log (replacedText);

// //.slice retorna uma "fatia do valor"
// const lastchar = 'texto'.slice(-1);
// console.log (lastchar);

// //0 é a primeira posição e -1 é eliminada
// const allWithoutlastChat = 'texto'.slice(0,-1);
// console.log(allWithoutlastChat);

// const secondToEnd = 'Tesxo'.slice(1);
// console.log(secondToEnd);

// //.substr retorna n caaracters a partir de uma posição, 0 é o inicio e 2 a quantidade de caracteres
// const twoCharsBeforeFirstPos = 'texto'.substr(0,2);
// console.log(twoCharsBeforeFirstPos);

// //funções com números

// const myNumber = 12.4032;

// //converte para string
// const numberAsString = myNumber.toString();
// console.log(numberAsString);

// // converte para 2 números fixos
// const fixedTwoDecimals = myNumber.toFixed(2);
// console.log(fixedTwoDecimals);

// // tranforma uma string  em float (permite número quebrado)
// console.log (parseFloat('13.22'));

// //tranforma uma string em int (não permite número quebrado)
// console.log (parseInt('13.20'));

// ES6 aavançado / aula 08/02/2022

// função normal

// var sumold = function (a,b){
//     return a + b;
// }

// //arrow fuction do ES6 , forma mais simples de escrever, direto com uma flecha (arrow)
// // caso queira definir variaveis, usar  if and else com o método arrow, tem que incluir as chaves como nas funções norrmais {}
// var sum = (a, b) => a + b;
// console.log(sum(5 , 15));

// //outra forma de arrow function , caso seja só um paramentro, pode-se omitir os parenteses
// var sum = a => a + 5;
// console.log(sum (5));

// // function construtora
// function car(){
//     this.foo = 'bar';
// }
// console.log(new car());

// // caracteristica de hoisting / move variaveis para o topo do código / este tipo de ação não pode ser executada em uma aarrow function
// log('teste'); //variável com hoistings
// function log (value) {
//     console.log(value);
// }

// aula dia 9/02/2022

// default function arguments
// retorno NaN == Not A Number

//exemplo caso fosse solicitado algum vvalor e o usuário não o tivesse atribuido

// function multiply(a, b) {
//   b = typeof b === "undefined" ? 1 : b; // caso com validação de tipo
//   return a * b;
// }
// console.log(multiply(5));

// //outtro exemplo do mesmo caso       \\ = ou
// function multiply2(a, b) {
//   b = b || 1;
//   return a * b;
// }
// console.log(multiply2(5));

// //  mesmo caso com if
// function multiply3(a, b) {
//   if ((b = typeof b === "undefined")) {
//     b = 1;
//   }
//   return a * b;
// }
// console.log(multiply3(5));

// // ou
// // caso o valor  seja colocado no console.log, o calculo sairá certo do mesmo jeito, caso não, o valor de b será 1s
// function multiply4(a, b = 1) {
//   //b pode ser b = a também
//   return a * b;
// }
// console.log(multiply4(5, 4)); //pode colocar undefined no lugar de b também

// // ou ainda
// // math. ramdom retorna um número aleatório / nunca será o mesmo valor
// //isso é uma lazy valuation
// function randomNumber() {
//   console.log("gerando um radom number");

//   return Math.random() * 10;
// }

// function multiply5(a, b = randomNumber()) {
//   return a * b;
// }
// console.log(multiply5(5));
// console.log(multiply5(5));


// //rest e spread operator
// //exemplo de como era feito determinadas soluções antes do ES6
// //com esse método é possivel somar qualque quantidade de números citados no console.log
// function sum(a, b) {
//   var value = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     value += arguments[i];
//   }
//   return value;
// }
// console.log(sum(5, 5, 5, 3, 2));

// //exemplo com ES6 / rest operator , sempre com ...
// // com o rest o código fica mais llimpo
// function sum2(...args) {
//   // caso seja adicionado outros elementos, o args fica com o que sobrar; exemplo (a, b, ...args)

//   return args.reduce((acc, value) => acc + value, 0);
// }

// console.log(sum2(5, 5, 5, 3, 2));



// const str = 'digital Innovation one';
// // quebra a fraze e separa letra por letra
// function logArgs(...args) {
//     console.log(args);
// }
// logArgs(...str);


// //faz com que cada item do array seja um item da function
// const arr = [1, 2, 3, 4];
// function logArgs2(a, b, c) {
//     console.log(a,b,c);
// }
// logArgs2(...arr);

// // o spreaad operator pode ser usado para construir arrays
// // .concat serve para concatenar
// const arr2 =arr.concat([5, 6, 7]);
//  console.log(arr2);


// // outro método
// //com spread operator
// const arr3 = [...arr, 5, 6, 7];

// console.log(arr3);



// aula dia 13/02/2022

// array normal
var arr = ['apple', 'Banana', 'Orange', ['tomato']];

var apple = arr[0];
var Banana = arr[1];
var Orange = arr[2];
var tomato = arr[3][0];


// Destructuring Aassigment, um jeito maais fácil de fazer o array acima, mas com o mesmo  resultado;
// destruction é bom, mas pode quebrar o codigo caso não seja bem executado com outro array dentro de um array, por exemplo, se a variavel [tomato2] não tiver o valor [tomato] para receber, ocorrerá erro, caso seja outra variavel que esteja apenas dentro de um unico array, recebera o valor undefined.
var [apple2, banana2, Orange2, [tomato2]] = ['apple', 'Banana', 'Orange', ['tomato']];

console.log(tomato2);


// complementos da função console

// .log mostra retornos no console do navegador
console.log('texto');

// .warn retorna um alerta
console.warn('texto amarelo como alerta');

// .error
console.error('texto vermelho com significado de erro');

// .trace
console.trace();

// .group
console.group('my group');
// itens do grupo
console.log('info inside group');
console.log('more info inside group');
// .groupEnd
console.groupEnd('fim do grupo');


// .time
console.time('log time');
setTimeout(() => {
 console.timeEnd('log time');   
});


// .table

console.table(['Allysson Ernandes', 'Estuda muito']);
console.log('%c styled log', 'color: blue;');