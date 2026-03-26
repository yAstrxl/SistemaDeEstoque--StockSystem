/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function(){
    const campoCep = document.getElementById("cep");
    
    campoCep.addEventListener("blur",buscarCep);
    campoCep.addEventListener("keypress",function(e){
        if(e.key === "Enter"){
            e.preventDefault();
            buscarCep();
        }
    });
});

async function buscarCep(){
    const campoCep = document.getElementById("cep");
    
    const cep = campoCep.value.replace(/\D/g, "");
    
    if(cep.length !== 8){
        if(cep.length < 0){
            alert("o seu cep está incorreto.");
            limparCampoEndereco();
        }
        return;
    }
    
    campoCep.style.borderColor= '#aaa';
    preencherCampo({aguardando:true});
    
    try {
        const apiCep = await fetch('https://viacep.com.br/ws/{cep}/json/');
        const dados = await apiCep.json();
        
        if(dados.erro){
            alert("Cep não encontrado.");
            limparCampoEndereco();
            campoCep.style.borderColor="red";
            return;
        }
        
        preencherCampo(dados);
        campoCep.style.borderColor="green";
        campoCep.value=cep.replace(/(\d{5}) (\d{3})/,"$1-$2");
    } catch (error){
        alert("Verifique a conexão com a internet");
        limparCamposEndereco();
        campoCep.style.borderColor="red";
        console.error("Erro na busca do CEP:",error);
    }
}



