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


