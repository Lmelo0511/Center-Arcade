var canvas;
var ctx;
var defaultTamanhoCauda = 3;
var tamanhoCauda = defaultTamanhoCauda;
var caminhoCobra = [];
var cobraEixoX = cobraEixoY = 10;
var tamanhoTela = tamanhoCaminho = 20;
var nextX = nextY = 0;
var appleX = (appleY = 15);
var pontuacao = 0;
var jogoReiniciado = false;
var pontuacaoElemento = document.createElement("p");
var res = document.getElementById("resultado");
document.body.appendChild(pontuacaoElemento);

window.onload = function() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", keyDownEvent);
    let x = 8;
    setInterval(desenharJogo, 1000/ x);

    function keyDownEvent(event){
        switch(event.keyCode){
            case 37:
                nextX = -1;
                nextY = 0;
                break;
            case 38:
                nextX = 0;
                nextY = -1;
                break;
            case 39:
                nextX = 1;
                nextY = 0;
                break;
            case 40:
                nextX = 0;
                nextY = 1;
                break;
        }
    }

    function desenharJogo() {
        cobraEixoX += nextX;
        cobraEixoY += nextY;

        if (cobraEixoX < 0) {
            cobraEixoX = tamanhoTela -1;
        }
        if (cobraEixoX > tamanhoTela -1) {
            cobraEixoX = 0;
        }
        if (cobraEixoY < 0) {
            cobraEixoY = tamanhoTela -1;
        }
        if (cobraEixoY > tamanhoTela -1) {
            cobraEixoY = 0;
        }

        if (caminhoCobra.some(segmento => segmento.x === cobraEixoX && segmento.y === cobraEixoY)) {
            tamanhoCauda = defaultTamanhoCauda;
            caminhoCobra = [];
            cobraEixoX = cobraEixoY = 10;
            nextX = nextY = 0;
            pontuacao = 0;
            reiniciarJogo(); // chamada para a função reiniciarJogo()
        }

        if (caminhoCobra.some(segmento => segmento.x === cobraEixoX && segmento.y === cobraEixoY)) {
            // Verifica se o jogo já foi reiniciado
            if (!jogoReiniciado) {
                tamanhoCauda = defaultTamanhoCauda;
                caminhoCobra = [];
                cobraEixoX = cobraEixoY = 10;
                nextX = nextY = 0;
                pontuacao = 0;
                reiniciarJogo();

                // Define jogoReiniciado como true
                jogoReiniciado = true;
                // exibe uma mensagem para informar ao jogador que o jogo foi reiniciado
                alert("Você perdeu! O jogo foi reiniciado.");
            } else {
                // Se o jogo não foi reiniciado, define jogoReiniciado como false
                jogoReiniciado = false;
            } 
        }
        
        function reiniciarJogo() {
            // redefine todas as variáveis do jogo para seus valores iniciais
            tamanhoCauda = defaultTamanhoCauda;
            caminhoCobra = [];
            cobraEixoX = cobraEixoY = 10;
            nextX = nextY = 0;
            appleX = (appleY = 15);
            pontuacao = 0;
        }
        
        if (cobraEixoX === appleX && cobraEixoY === appleY) {
            tamanhoCauda++;
            appleX = Math.floor(Math.random() * tamanhoTela);
            appleY = Math.floor(Math.random() * tamanhoTela);
            pontuacao++;
            res.innerHTML = "Pontuação: " + pontuacao;
        }

        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "orange";
        for (let i = 0; i < caminhoCobra.length; i++) {
            ctx.fillRect(
                caminhoCobra[i].x * tamanhoCaminho,
                caminhoCobra[i].y * tamanhoCaminho,
                tamanhoCaminho,
                tamanhoCaminho
            );
        }

        caminhoCobra.push({
            x:cobraEixoX,
            y:cobraEixoY
        });
        while (caminhoCobra.length > tamanhoCauda){
            caminhoCobra.shift();
        }

        ctx.fillStyle = "red";
        ctx.fillRect(appleX * tamanhoCaminho, appleY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho);
    }
};
