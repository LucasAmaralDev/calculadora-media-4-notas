function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);

    //se nota nao existir retorna erro
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        window.alert("Por favor, preencha todos os campos");
        return;
    }

    //verificando se as notas sao validas
    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        window.alert("Por favor insira uma nota entre 0 e 10!");
        return;
    }

    //calculando a media
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    //setando os gifs como none
    document.getElementById("notaboa").style.display = "none";
    document.getElementById("media").style.display = "none";
    document.getElementById("ruim").style.display = "none";

    //mudando o layout para exibir a media
    document.getElementById("medianota").innerHTML = media;
    document.getElementById("aguardo").style.display = "none";
    document.getElementById("respondido").style.display = "flex";

    //colocando o gif conforme a media
    if (media >= 8) {
        document.getElementById("notaboa").style.display = "unset";
        return;
    }if (media >= 5.5) {
        document.getElementById("media").style.display = "unset";
        return;
    }   else {
        document.getElementById("ruim").style.display = "unset";
    }
}

function limpar() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
    document.getElementById("aguardo").style.display = "flex";
    document.getElementById("respondido").style.display = "none";
    document.getElementById("notaboa").style.display = "none";
    document.getElementById("media").style.display = "none";
    document.getElementById("ruim").style.display = "none";
}