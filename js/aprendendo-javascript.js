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
// var atribucao = 'allysson';
// console.log(atribucao);

//comparação
// var comparacao= '0' == 0;
// console.log(comparacao)

//comparação idêntica
// var comparacao_identica = 0 === 0;
// console.log(comparacao_identica)

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
// ! "não" - inverte o valor de verdadeiro para falso e vice-versa.

// 20/12/2021

//arrays ou vetores (tipo de lista o matriz de variaveos, onde cada variavel possui um indice)

//um array pode guardar varios tipos de dados

//

// console.log(array[4]);

// métodos de chamar arrays

//foreach

//item mostra o item salvo, index mostra quem que posição ele está
// array.forEach(function (item, index){
//     console.log(item, index);
// })

//push
//adiciona um nnovo item no final do arrey, semelhante ao push do github no terminal

// array.push('novo item');
//     console.log(array);

//pop
//apaga o ultimo item do array

// array.pop();
// console.log(array);

//shift
//parecido com o pop, porém remove o primeiro item do array

// array.shift();
// console.log(array);

//unshift
//adiciona um novo item no array

// array.unshift('novo item');
// console.log(array);

//indexof
//retorna determinado indice do array

// console.log(array.indexOf(true));

//splice
// remove ou substitui um item por um indice

// array.splice(0, 3);
// console.log(array);

//slice
//retorna uma parte de um array existente

// let novoarray = array.slice(0,3);
// console.log(novoarray);

//OBJETOS
//são dados que possuem propriedades e valores que definem suas caracteristicas.

// let object = { String: 'string', Number: 1, Boolean: true, Array: ['array'], objectinterno: {objectinterno: 'objeto interno'}}

//métodos de desestruturação de objetos

// console.log(object);

// console.log(object.objectinterno);

// var string = object.String;
// console.log(string);

// var arrayinterno = object.Array;
// console.log(arrayinterno);

// var {String , Boolean, objectinterno} = object;
// console.log(String, Boolean, objectinterno);

//estrturas condicionais

// var jogador1 = 0;
// var jogador2 = 1;
// var placar;

// //if ternário de uma liha só, sempre usando dois pontos ":" e interrogação "?" este if não impede a execução if seguinto como em um if aninhado
// jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') : console.log('jogadores inválidos');

// if (jogador1 > 0 && jogador2 == 0){
//     console.log('Jogador1 marcou ponto');
//     placar = jogador1 > jogador2;
// }
// else if(jogador2 > 0 && jogador1 == 0){
//     console.log('Jogador2 marcou ponto');
//     placar = jogador2 > jogador1;
// }

// else{
//     console.log('ninguém marcou ponto');
// }

// switch (placar) {
//     case placar = jogador1 > jogador2:
//         console.log('jogador1 ganhou');
//         break;

//     case placar = jogador2 > jogador1:
//         console.log("jogador2 ganhou");
//         break;

//         default:
//             console.log('Ninguém ganhou');
// }

//estrutura de repetição
//for

// let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
// let object = {
//   propriedade1: "valor1",
//   propriedade2: "valor2",
//   propriedade3: "valor3",
// };

//for executa uma instrução até que ela seja falsa

// for(let indice = 0; indice < array.length; indice++) {
// console.log(indice);
// }

//for/in (imprime o indice 0,1,3 ...)

// for(let i in array){
//    console.log(i);
// }

//for/in object
//apenas setando o I dentro das chaves o programa já entende que é uma variável

// for (i in object){
//     console.log(i);
// }

//for/of (imprime o valor de cada indice, propriedade1....)

// for (i of array) {
// console.log(i);
// }

//while

// var a = 0;

// while (a < 10){
//     a++;
//     console.log(a);
// }

// do{
//     a++;
//     console.log(a);
// } while (a <10);

//FUNÇÕES (são blocos de comandos e instruções para a execução de determinadas tarefas)
//funções declarativas (de uso mais comum) nome obrigatório
// () indicam que é uma função
// {} indicam que é um bloco de intrução

// function funcao() {
//     console.log('tudo certo jovem');

// }

// funcao();

//function com paramentros

// function mensagem(parametro1, parametro2){
//     console.log(parametro1 * parametro2);
// }

// mensagem(5, 10);

//expressões e funções (funções atribuidas a expressões, nome é opcional)
//EX:
// var funcao = function nomedafuncao(){
//     código
// }

//nesse caso o js já atribui o nome da variavel a função
// var funcao = function(){
//     código
// }

//arrow function (não podem ser nomeadas por ter uma estrutura menor)

// var funcao = () => {
//     console.log('sou uma função');
// }
// funcao();

//criando uma calculadora no js

function calculadora() {
  const operacao = Number(
    prompt(
      "Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão Inteira (%)\n 6 - potenciação (**)"
    )
  );

  if (!operacao || operacao >= 7) {
    alert("operação inválida!!");
    calculadora();
  } else {
    let n1 = Number(prompt("insira o primeiro Número:"));
    let n2 = Number(prompt("insira o segundo Número:"));
    let resultado;

    if (!n1 || !n2) {
      alert("Erro - parametros inválidos");
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre  ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = Number(
          prompt("dejesa fazer outra operação? 1 = sim\n 2 = não")
        );

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("até mais");
        } else {
          alert("operação inválida. Digite novamente!!");
          novaOperacao();
        }
      }
    }

    //opção 1
    // if (operacao == 1) {
    //   soma();
    // } else if (operacao == 2) {
    //   subtracao();
    // } else if (operacao == 3) {
    //   multiplicacao();
    // } else if (operacao == 4) {
    //   divisaoReal();
    // } else if (operacao == 5) {
    //   divisaoInteira();
    // } else if (operacao == 6) {
    //   potenciacao();
    // }

    //opção 2
    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteira();
      case 6:
        potenciacao();
        break;
    }
  }
}

calculadora();
