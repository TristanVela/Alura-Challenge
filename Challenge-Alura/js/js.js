function encriptar() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = encriptarTexto(texto);
    document.getElementById("outputText").value = textoEncriptado;
}

function desencriptar() {
    let textoEncriptado = document.getElementById("inputText").value;
    let textoDesencriptado = desencriptarTexto(textoEncriptado);
    document.getElementById("outputText").value = textoDesencriptado;
}

function encriptarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function desencriptarTexto(textoEncriptado) {
    textoEncriptado = textoEncriptado.toLowerCase();
    textoEncriptado = textoEncriptado.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
    return textoEncriptado;
}

document.getElementById("copyButton").addEventListener("click", function() {
    let textoCopiado = document.getElementById("outputText").value;
    navigator.clipboard.writeText(textoCopiado).then(function() {
        alert("Texto copiado al portapapeles");
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
});