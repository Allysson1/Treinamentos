//novo curso
//27/12/2021

// ajax, conjunto de técnicas para melhor interação com o cliente

// jquery é uma biblioteca de funções javascript

function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    console.log(url);
   //$ é usado para acessar o jquery
    $.ajax({
        url: url,
        type: "GET", 
        success: function(response){
            console.log(response);

            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("uf").innerHTML = response.uf;
            //    outra formaa de mostrar o resultado
            $("#cidade").html(response.localidade); 
            $("#titulocep").html("CEP " + response.cep);
        }
    })
}


//pesquisar depois
// $(function(){
//     $(".cep").hide();
// });