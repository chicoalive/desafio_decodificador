

var palavraNormal = prompt("Digite seu texto");

let textoCodificado = "";

for (let i = 0; i < palavraNormal.length; i++) {
    let letra = palavraNormal[i];
    if (letra == "e") {
        textoCodificado += "enter";
    } else if (letra == "i") {
        textoCodificado += "imes";
    } else if (letra == "a") {
        textoCodificado += "ai";
    } else if (letra == "o") {
        textoCodificado += "ober";
    } else if (letra == "u") {
        textoCodificado += "ufat";
    } else {
        textoCodificado += letra;
    }
}
alert(textoCodificado);