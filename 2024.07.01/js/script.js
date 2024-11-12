function pessoa(obj){
    if(obj == "pf"){
        document.getElementById('cpf').style.display = "block";
        document.getElementById('cnpj').style.display = "none";
        document.orcamento.cpf.focus();
    }else{
        document.getElementById('cpf').style.display = "none";
        document.getElementById('cnpj').style.display = "block";
        document.orcamento.cnpj.focus();
    }
}

function senha(){
    s1 = document.orcamento.senha1.value;
    s2 = document.orcamento.senha2.value;

    if(s1 != s2){
        document.getElementById('msg').style.display = "block";
    }
    else{
        document.getElementById('msg').style.display = "none";
    }
    
}

function mascara_cpf(obj){

    if(obj.value.length == 3){
        obj.value += "."
    }
    else if(obj.value.length == 7){
        obj.value += "."
    }
    else if(obj.value.length == 11){
        obj.value += "-"
    }

}

function mascara_cnpj(obj){

    if(obj.value.length == 2){
        obj.value += "."
    }
    else if(obj.value.length == 6){
        obj.value += "."
    }
    else if(obj.value.length == 10){
        obj.value += "/"
    }
    else if(obj.value.length == 15){
        obj.value += "-"
    }

}

function mascara_tel(obj){
    if(obj.value.length == 0){
        obj.value += "("
    }
    else if(obj.value.length == 3){
        obj.value += ")"
    }
    else if(obj.value.length == 9){
        obj.value += "-"
    }
}