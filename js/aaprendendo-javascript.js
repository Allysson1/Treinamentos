//introdução a JS 18/12/2021


// alert mostra uma mensagem antes de mostrar o conteúdo do site
// alert("Tudo certo jovem!");



// tipos com variáveis
//o javascript já converte os numeros ou strings sozinho

// bolean 
// var VouF = false;
// console.log(numero);
// console.log(typeof(VouF));


//number
// var numero = 1;
// console.log(numero);
// console.log(typeof(numero));


//string
// variaves do tipo string tem que ser colocadas dentro de aspas simples ''
// var nome = 'Allysson';
// console.log(nome);
// console.log(typeof(nome));


//variavel var pode ser alterada depois de sua criação
//EX:
// var nome = 'Allysson';
// nome = "Ernandes";


//variavel let também pode ser alterada posteriormente
//utilizada dento
//ex:
// let nome = 'Allysson';
// nome = "Ernandes";


//variavel const não pode ser alterada por ser constante, um exemplo de constante é o valor de PI = 3,14, caso seu valor tente sser alterado, ocorrera erro
// const nome = 'Allysson';


//escopo define limitaçção e visibilidade de um bloco de código

//escopo tipo global (definida fora de bloco de código, pode ser vista a qualquer momento)
// var escopoglobal = 'global';
// console.log(escopoglobal);


// //escopo tipo global (definida dentro de bloco, pode ser vista somente dentro do bloco)
// function escopolocal () {
//     var escopolocalinterno = 'local';
//     console.log(escopolocalinterno)
// }

// escopolocal();


//atribuição
var atribucao = 'allysson';
console.log(atribucao);



//comparação
var comparacao= '0' == 0;
console.log(comparacao)


//comparação idêntica
var comparacao_identica = 0 === 0;
console.log(comparacao_identica)



//operadores aritméticos

// + adição
// - subtrção
// * multiplicação
// / divisão real
// % divisão inteira
// ** potenciação



//operadores relacionais

// > maior que
// < menor que
// >= maior igual que
// <= menor igual que 



// operadores lógicos

// && "e" - considera que tods os valores sejam verdadeiro
// // "ou" -  cinsidera que qualquer valor seja verdadeiro
// ! "não" - inverte o valor de verdadeiro para falso e vice-versa