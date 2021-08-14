date = new Date();
atual_dia = date.getDate();
atual_mes = date.getMonth() + 1;
atual_ano = date.getFullYear();

if(atual_mes < 10){
    data_Completa = atual_ano + "-0" + atual_mes + "-" + atual_dia ;
}
else{
    data_Completa = atual_ano + "-" + atual_mes + "-" + atual_dia ;
}

function checarDados(){
    if(document.getElementById('nome').value == "" 
    || document.getElementById('email').value == ""){
        alert("Por favor, preencha todos os campos.");
    }
    else if(document.getElementById('data').value < data_Completa){
        alert("Digite uma data valida!")
    }
    else{
        alert("Dados enviados com sucesso.")
    }
    
}