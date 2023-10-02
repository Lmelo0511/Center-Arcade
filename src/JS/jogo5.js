var cartas = document.querySelectorAll('.carta');

let temCartaVirada = false;
let bloquearTabuleiro = false;
let primeiraCarta, segundaCarta;
let pontuacao = 0;

function virandoCartas() {
    if (bloquearTabuleiro) return;

    this.classList.add("virar");

    if (!temCartaVirada) {
        temCartaVirada = true;
        primeiraCarta = this;
    } else {
        segundaCarta = this;
        bloquearTabuleiro = true;
        verificarCartasIguais();
    }
}

function verificarCartasIguais() {
    document.querySelector(".pontuacao").textContent = pontuacao;

    let saoIguais = primeiraCarta.dataset.card === segundaCarta.dataset.card;
    
    saoIguais ? pontuacao++ : pontuacao = pontuacao -2;

    saoIguais ? desabilitarCartas() : desvirarCartas();

    if (pontuacao === 6) {
        verificarFimDoJogo();
    }
}

function desabilitarCartas() {
    primeiraCarta.removeEventListener('click', virandoCartas);
    segundaCarta.removeEventListener('click', virandoCartas);
    resetarTabuleiro();
}

function desvirarCartas() {
    setTimeout(() => {
        primeiraCarta.classList.remove("virar");
        segundaCarta.classList.remove("virar");

        resetarTabuleiro();
    }, 1000);
}

function resetarTabuleiro() {
    [temCartaVirada, bloquearTabuleiro] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

//Recomeçar Jogo
document.getElementById("botao").addEventListener("click", function() {
    cartas.forEach(carta => carta.classList.remove("virar"));
    cartas.forEach(carta => carta.addEventListener('click', virandoCartas));
    pontuacao = 0;
    document.querySelector(".pontuacao").textContent = "0";
    resetarTabuleiro();
    embaralharCartas();
});

cartas.forEach(carta => carta.addEventListener('click', virandoCartas));
 
function embaralharCartas() {
    cartas.forEach(carta => {
        let posicao = Math.floor(Math.random() * 12);
        carta.style.order = posicao;
    });
};

function verificarFimDoJogo() {
    const cartasViradas = document.querySelectorAll('.carta.virar');
    if (cartasViradas.length === cartas.length) {
        alert("Parabéns! Você lembrou de todas");
    } else {
        alert("Sua pontuação foi " + pontuacao);
    }
}
