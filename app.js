function criptografar() {
    var palavraNormal = document.getElementById('inputTexto').value;

    let codificar = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    let textoCodificado = "";

    for (let i = 0; i < palavraNormal.length; i++) {
        let letra = palavraNormal[i];
        if (codificar[letra] != undefined) {
            textoCodificado += codificar[letra];
        } else {
            textoCodificado += letra;
        }
    }

    document.getElementById('mensagem').innerText = textoCodificado;
}

function descriptografar() {
    var palavraCodificada = document.getElementById('inputTexto').value;

    let decodificar = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    let textoDescodificado = "";
    let palavras = Object.keys(decodificar);
    let i = 0;
    while (i < palavraCodificada.length) {
        let decodificado = false;
        for (let j = 0; j < palavras.length; j++) {
            let palavra = palavras[j];
            if (palavraCodificada.substring(i, i + palavra.length) == palavra) {
                textoDescodificado += decodificar[palavra];
                i += palavra.length;
                decodificado = true;
                break;
            }
        }
        if (!decodificado) {
            textoDescodificado += palavraCodificada[i];
            i++;
        }
    }

    document.getElementById('mensagem').innerText = textoDescodificado;
}
