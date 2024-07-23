

var palavraNormal = prompt("Digite seu texto");

let textoCodificado = "";

for (let i = 0; i < palavraNormal.length; i++) {
    let letra = palavraNormal[i];
    if (letra == "e") {
        textoCodificado += "enter ";
    } else if (letra == "i") {
        textoCodificado += "imes ";
    } else if (letra == "a") {
        textoCodificado += "ai ";
    } else if (letra == "o") {
        textoCodificado += "ober ";
    } else if (letra == "u") {
        textoCodificado += "ufat ";
    } else {
        textoCodificado += letra;
    }
}

alert(textoCodificado);

var palavraCodificada = prompt("Digite o texto codificado");

let textoDescodificado = "";

let decodificar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

let palavra = "";
for (let i = 0; i < palavraCodificada.length; i++) {
    let letra2 = palavraCodificada[i];
    if (letra2 != " ") {
        palavra += letra2;
    } else {
        if (decodificar[palavra] != undefined) {
            textoDescodificado += decodificar[palavra];
        } else {
            textoDescodificado += palavra;
        }
        palavra = "";
    }
}
if (decodificar[palavra] != undefined) {
    textoDescodificado += decodificar[palavra];
} else {
    textoDescodificado += palavra;
}

alert(textoDescodificado);
