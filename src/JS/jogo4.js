var pontuacaoJogador = 0;
var pontuacaoComputador = 0;

function jogar() {
    const jogadorInput = document.getElementById("jogador");
    const computadorInput = document.getElementById("computador");
    const escolhaJogador = parseInt(jogadorInput.value);

    // Escolha aleatória do computador (0, 1 ou 2)
    const escolhaComputador = Math.floor(Math.random() * 3);
    const resultado = verificarResultado(escolhaJogador, escolhaComputador);
  
    // Atualizar os campos de entrada com as escolhas
    jogadorInput.value = getEscolhaNome(escolhaJogador);
    computadorInput.value = getEscolhaNome(escolhaComputador);

    // Atualizar a pontuação da página HTML
    document.getElementById("pontuacaoJogador").textContent = pontuacaoJogador;
    document.getElementById("pontuacaoComputador").textContent = pontuacaoComputador;
}

function getEscolhaNome(escolha) {
    switch (escolha) {
      case 0:
        return "✊🏻";
      case 1:
        return "✋🏻";
      case 2:
        return "✌🏻";
      default:
        return "";
    }
}

function verificarResultado(jogador, computador) {
    var res = document.getElementById("res")
    if (computador == 0) {
        if (jogador == 0) {
            res.innerHTML = "EMPATE"
        }
        else if (jogador == 1) {
            res.innerHTML = "Jogador VENCEU"
            pontuacaoJogador++;
        }
        else if (jogador == 2) {
            res.innerHTML = "Computador VENCEU"
            pontuacaoComputador++;
        }
        else {
            res.innerHTML = "Jogada ÍNVALIDA!"
        }
    }
    else if (computador == 1) {
        if (jogador == 0) {
            res.innerHTML = "Computador VENCEU"
            pontuacaoComputador++;
        }
        else if (jogador == 1) {
            res.innerHTML = "EMPATE"
        }
        else if (jogador == 2) {
            res.innerHTML = "Jogador VENCEU"
            pontuacaoJogador++;
        }
        else {
            res.innerHTML = "Jogada Ínvalida"
        }
    }
    else if (computador == 2) {
        if (jogador == 0) {
            res.innerHTML = "Jogador VENCEU"
            pontuacaoJogador++;
        }
        else if (jogador == 1) {
            res.innerHTML = "Computador VENCEU"
            pontuacaoComputador++;
        }
        else if (jogador == 2) {
            res.innerHTML = "EMPATE"
        }
        else {
            res.innerHTML = "Jogada ÍNVALIDA"
        }
    }  
}   

function recomecar() {
    document.getElementById("jogador").value = ""
    document.getElementById("computador").value = ""
    res.innerHTML = ""
}   
