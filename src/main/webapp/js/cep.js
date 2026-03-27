document.addEventListener("DOMContentLoaded", function() {
   const campoCep = document.getElementById("cep");
   
   campoCep.addEventListener("blur", buscarCep);
   campoCep.addEventListener("keypress", function(e) {
       if (e.key === "Enter") {
           e.preventDefault();
           buscarCep;
       }
   });
});

async function buscarCep() {
    const campoCep = document.getElementById("cep");
    
    const cep = campoCep.value.replace(/\D/g, "");
    
    if(cep.length !== 8) {
        if(cep.length < 0) {
            alert("O seu CEP está incorreto.");
            limparCamposEndereco();
        }
        return;
    }
    
    campoCep.style.borderColor = '#aaa';
    preencherCampo({aguardando: true});
    
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await response.json();
        
        if (dados.erro) {
            alert("CEP não encontrado.");
            limparCamposEndereco();
            campoCep.style.borderColor = "red";
            return;
        }
        
        preencherCampo(dados);
        campoCep.style.bordercolor = "green";
        
        campoCep.value = cep.replace(/(\d{5}) (\d{3})/, "$1-$2");
        
        document.getElementById("numero"); 
        
    } catch (error) {
        alert("Verifique a conexão com a internet");
        limparCamposEndereco();
        campoCep.style.borderColor = "red";
        console.error('Erro na busca do CEP: ', error);
        
    }
}

function preencherCampo(dados){
    if (dados.aguardando){
        document.getElementById("cidade").value = "Buscando CPF...";
        document.getElementById("endereco").value = "Buscando CPF...";
        document.getElementById("bairro").value = "Buscando CPF...";
        document.getElementById("estado").value = "Buscando CPF...";
        return;
    }
    
    document.getElementById("cidade").value = dados.localidade || "";
    document.getElementById("endereco").value = dados.logradouro || "";
    document.getElementById("bairro").value = dados.bairro || "";
    document.getElementById("estado").value = dados.uf || "";
    
    if(dados.complemento){
         document.getElementById("complemento").value = dados.complemento;
    }
}

function limparCamposEndereco(){
    document.getElementById("cidade").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("estado").value = "";
}