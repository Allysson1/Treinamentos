// novo curso
//23/12/2021

//teste de funcionamento 
// alert('oi');


//como substituir valores em variavel
// replace (as letras da palavra a ser trocada tem que ser iguais, maiúsculas e minúsculas)

// var frase = "Japão é o melhor país do mundo";
// console.log(frase.replace("Japão", "Brasil"))



// datas no js
// var d = new Date();
// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getUTCFullYear());
// console.log(d.getUTCDay());
// console.log(d.getMinutes());
// console.log(d.getMilliseconds());
// console.log(d.getMonth())


//function do botão no index.html
//innerhtml permite escrever um texto html no arquivo js
function clicou(){
    document.getElementById("agradecimento"). innerHTML = "obrigado por clicar";
    console.log(document.getElementById("agradecimento"));
    // alert("obrigado por clicar");
}

//window.open abre o link em outra aba
//window.location.href abre na mesma aba
function redirecionar(){
//  window.open("www.google.com");  
 window.location.href = "www.google.com";
}

/*quando se usa o this, tem que por o elemento dentro dos parenteses
e substituir o getelementbyid pela funão direta */
function trocar(elemento){
    //uso sem o this
    // document.getElementById("mouseover").innerHTML = "obrigado por passar o mouse";
    
    //uso com o this
    elemento.innerHTML = "obrigado por passar o mouse";

}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "passe o mouse aqui";
    
    elemento.innerHTML = "passe o mouse aqui";
}


function load(){
    alert("pagina carreda");
}

function funcaochange(elemento){
console.log(elemento.value);
}