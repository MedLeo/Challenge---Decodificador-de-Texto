function codificar() {
    let frase = document.getElementById("textoCodificado").value.toLowerCase();
    let textoCodificado = frase
        .replace(/e/g, "esc")
        .replace(/i/g, "inc")
        .replace(/a/g, "alt")
        .replace(/o/g, "obey")
        .replace(/u/g, "uther");

    document.getElementById("textoDecodificado").value = textoCodificado;
}

function decodificar() {
    let frase = document.getElementById("textoCodificado").value.toLowerCase();
    let textoCodificado = frase
        .replace(/esc/g, "e")
        .replace(/inc/g, "i")
        .replace(/alt/g, "a")
        .replace(/obey/g, "o")
        .replace(/uther/g, "u");

    document.getElementById("textoDecodificado").value = textoCodificado;
    document.getElementById("textoCodificado").value = "";
}

function copiar() {
    let textoCodificado = document.querySelector("#textoDecodificado");
    textoCodificado.select(); 
    document.execCommand("copy");   
    alert("Texto copiado!");
}

function colar() {
    navigator.clipboard.readText().then(
        clipText => document.getElementById("textoCodificado").value = clipText
    );
}
