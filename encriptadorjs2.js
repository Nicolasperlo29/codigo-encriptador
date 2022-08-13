var inputMensaje = document.querySelector(".textotarea");
var imagenpersona = document.querySelector(".imagen-persona");
var textoningun = document.querySelector(".textoningun");
var textoingrese = document.querySelector(".textoingrese");

function ocultar(){
    imagenpersona.classList.add("ocultar");
    textoningun.classList.add("ocultar");
    textoingrese.classList.add("ocultar");
}

function encriptar(){
    ocultar(); 
    var textousuario = document.getElementById("textousuario").value;
    var textoencriptado= "";

    for(var i = 0; i < textousuario.length; i++){
        if(textousuario[i]=="e"){
            textoencriptado = textoencriptado + "enter";
        }
        else if (textousuario[i]=="o"){
            textoencriptado = textoencriptado + "ober";
        }
        else if (textousuario[i]=="i"){
            textoencriptado = textoencriptado + "imes";
        }
        else if (textousuario[i]=="a"){
            textoencriptado = textoencriptado + "ai";
        }
        else if (textousuario[i]=="u"){
            textoencriptado = textoencriptado + "ufat";
        }
        else{
            textoencriptado += textousuario[i]; 
        }
    }
    document.querySelector(".textoresultado").innerHTML= textoencriptado;    
}

function desencriptar(){
    var textousuario = document.getElementById("textousuario").value;
    var textoencriptado= "";

    for(var i = 0; i < textousuario.length; i++){
        if(textousuario[i]=="e"){
            textoencriptado = textoencriptado + "e";
            i = i+4;
        }
        else if (textousuario[i]=="o"){
            textoencriptado = textoencriptado + "o";
            i = i+3;
        }
        else if (textousuario[i]=="i"){
            textoencriptado = textoencriptado + "i";
            i = i+3;
        }
        else if (textousuario[i]=="a"){
            textoencriptado = textoencriptado + "a";
            i++;
        }
        else if (textousuario[i]=="u"){
            textoencriptado = textoencriptado + "u";
            i = i+3;
        }
        else{
            textoencriptado += textousuario[i]; 
        }
    }
    document.querySelector(".textoresultado").innerHTML= textoencriptado;
}

function copiar () {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.querySelector(".textoresultado").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    inputMensaje.focus();
    inputMensaje.value = "";
    alert("Mensaje copiado");
}

function limpiar(){
    inputMensaje.focus();
    inputMensaje.value = "";
}