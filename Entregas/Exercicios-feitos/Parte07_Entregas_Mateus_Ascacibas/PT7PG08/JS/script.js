function checarDados(){
    if(document.getElementById("nome").value == "" || document.getElementById("email").value == "" ){
        alert("Preencha todos os campos!");
        return false;
    }
    else{
        alert("Dados enviados com sucesso.");
    }
}