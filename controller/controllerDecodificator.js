function criptografar() {
    let texto = document.querySelector('input').value;
    validaTexto(texto, "c");
}

function descriptografar() {
    let texto = document.querySelector('input').value;
    validaTexto(texto, "d");
}

function copiarTexto(){
    var texto = document.getElementById("texto__resposta").innerHTML;

    navigator.clipboard.writeText(texto)
    .then(() => {alerta('Texto copiado com sucesso!', "success")})
    .catch(erro => {
        alert("Algo deu errado, ", erro);
    });
}

function codificador(texto) {
    let removeE = texto.replaceAll("e", "enter");
    let removeI = removeE.replaceAll("i", "imes");
    let removeA = removeI.replaceAll("a", "ai");    
    let removeO = removeA.replaceAll("o", "ober");
    let removeU = removeO.replaceAll("u", "ufat");

    let tudoRemovido = removeU;
    document.getElementById("texto__resposta").innerHTML = tudoRemovido;
}

function decodificador(texto) {
    let removeA = texto.replaceAll("ai", "a");
    let removeE = removeA.replaceAll("enter", "e");
    let removeI = removeE.replaceAll("imes", "i");
    let removeO = removeI.replaceAll("ober", "o");
    let removeU = removeO.replaceAll("ufat", "u");

    let tudoRemovido = removeU;
    document.getElementById("texto__resposta").innerHTML = tudoRemovido; 
}

function validaTexto(texto, tipo) {
    //Aceitar apenas letras minúsculas, sem acentos e nem caracteres epeciais
    let regex = /^[a-z0-9 ]+$/;
    if(texto.length == 0)
    {
        inverterCampo();
    }
    else if(regex.test(texto) == false)
    {
        alerta("Utilize apenas letras minúsculas e espaços em branco!","warning");
    }
    else if(tipo.toLowerCase() == "c")
    {
        atualizaCampo();
        codificador(texto);
    }
    else if(tipo.toLowerCase() == "d")
    {
        atualizaCampo();
        decodificador(texto);
    }
    else
    {
        alerta("Caractere indevido!", "error");
    }
}

function atualizaCampo() {
    document.getElementById("apresentacaoLateral").style.display = "none";
    document.getElementById("apresentacaoLateral_texto-decodificado").style.display = "flex";
}

function inverterCampo() {
    document.getElementById("apresentacaoLateral").style.display = "flex";
    document.getElementById("apresentacaoLateral_texto-decodificado").style.display = "none";
}

function iconeAlerta(){
    alerta("Utilize apenas letras minúsculas e espaços em branco!","warning");
}

function alerta(texto, icon) {
    swal({
        text: texto,
        icon: icon,
        
        //button: "Entendi"
      });
}