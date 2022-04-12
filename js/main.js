'use strict';


function limpar(){
    document.getElementById('endereco').innerHTML =' ';
    document.getElementById('bairro').innerHTML =' ';
    document.getElementById('cidade').innerHTML =' ';
    document.getElementById('estado').innerHTML =' ';
}



function preencher(endereco){
    document.getElementById('endereco').innerHTML = endereco.logradouro;
    document.getElementById('bairro').innerHTML = endereco.bairro;
    document.getElementById('cidade').innerHTML = endereco.localidade;
    document.getElementById('estado').innerHTML = endereco.uf;
}



function temporizador(){
    document.getElementById("card").style.display = "none";
    document.getElementById("loader").style.display = "block";
    setTimeout(mostra, 1000);
}

function mostra(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("card").style.display = "block";
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limpar();
    
    
    const cep = document.getElementById('cep').value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)){
        const dados = await fetch(url);

        const endereco = await dados.json();
    
        
        if (endereco.hasOwnProperty('erro')){

            document.getElementById('resposta').innerHTML = 'CEP não encontrado!';

        }else {
            
            document.getElementById('resposta').innerHTML = ' ';

            temporizador();

            preencher(endereco);
        }
    }else{

        document.getElementById('resposta').innerHTML = 'CEP incorreto ou vazio!';
        
    }
   
    
}

const butao = document.getElementById('bt')

butao.addEventListener('click',pesquisarCep);


  


