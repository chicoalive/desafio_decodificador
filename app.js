// Função para limpar o texto quando o usuário clica para digitar
function limparTexto() {
    var input = document.getElementById('inputCriptografar');
    if (input.innerText === 'Digite o seu texto aqui...') {
        input.innerText = '';
    }
}

// Função para criptografar o texto
function criptografar() {
    // Obtém o texto digitado pelo usuário
    var palavraNormal = document.getElementById('inputCriptografar').innerText;

    // Mapeamento das letras para os códigos
    let codificar = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    let textoCodificado = "";

    // Substitui as letras pelos códigos correspondentes
    for (let i = 0; i < palavraNormal.length; i++) {
        let letra = palavraNormal[i];
        if (codificar[letra] != undefined) {
            textoCodificado += codificar[letra];
        } else {
            textoCodificado += letra;
        }
    }

    // Exibe o texto criptografado no retângulo à direita
    document.getElementById('mensagemCriptografada').innerText = textoCodificado;
    document.getElementById('mensagemDescriptografada').innerText = ""; // Limpar mensagem descriptografada
    document.getElementById('nenhuma-mensagem').style.display = 'none'; // Esconder mensagem "Nenhuma mensagem encontrada"
    document.getElementById('texto-criptografar').style.display = 'none'; // Esconder mensagem "Digite um texto..."
    document.getElementById('copiar').style.display = 'block'; // Mostrar botão copiar
}

// Função para descriptografar o texto
function descriptografar() {
    // Obtém o texto criptografado digitado pelo usuário
    var palavraCodificada = document.getElementById('inputCriptografar').innerText;

    // Mapeamento dos códigos para as letras
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

    // Substitui os códigos pelas letras correspondentes
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


    // Exibe o texto descriptografado no retângulo à direita
    document.getElementById('mensagemDescriptografada').innerText = textoDescodificado;
    document.getElementById('mensagemCriptografada').innerText = ""; // Limpar mensagem criptografada
    document.getElementById('nenhuma-mensagem').style.display = 'none'; // Esconder mensagem "Nenhuma mensagem encontrada"
    document.getElementById('texto-criptografar').style.display = 'none'; // Esconder mensagem "Digite um texto..."
    document.getElementById('copiar').style.display = 'block'; // Mostrar botão copiar
}

// Função para copiar o texto criptografado/descriptografado
function copiarTexto() {
    var texto = document.getElementById('mensagemCriptografada').innerText || document.getElementById('mensagemDescriptografada').innerText;
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado para a área de transferência');
    }, function(err) {
        alert('Erro ao copiar texto: ', err);
    });
}
