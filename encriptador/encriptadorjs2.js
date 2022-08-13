function encriptar(){
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
    document.getElementById("textoresultado").innerHTML= textoencriptado;
}
idbotonencriptar.onclick=encriptar;


