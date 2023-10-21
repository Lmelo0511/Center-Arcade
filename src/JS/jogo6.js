//Torres
let torre1 = document.getElementById("torre1");
let torre2 = document.getElementById("torre2");
let torre3 = document.getElementById("torre3");

//Clique das Torres
torre1.addEventListener("click", clicado);
torre2.addEventListener("click", clicado);
torre3.addEventListener("click", clicado);

//Discos
let disco1 = document.getElementById("disco1");
let disco2 = document.getElementById("disco2");
let disco3 = document.getElementById("disco3");
let disco4 = document.getElementById("disco4");

//Colunas
let coluna1 = document.getElementById("coluna1");
let coluna2 = document.getElementById("coluna2");
let coluna3 = document.getElementById("coluna3");

//Atualizando os movimentos da peças
let pontuacaoMovimentos = document.getElementById("movimentos");
let movimentos = 0;

let destino = false;
let botaoRecomecar = document.getElementById("botao").addEventListener("click", recomecarJogo);
let discoAtual;

function clicado(event){
    let targe = event.currentTarget;
    let targeID = targe.id;
    movendoDiscos(targeID);
}

function recomecarJogo() {
    movimentos = 0;
    pontuacaoMovimentos.innerText = movimentos;
    coluna1.appendChild(disco1);
    coluna1.appendChild(disco2);
    coluna1.appendChild(disco3);
    coluna1.appendChild(disco4);
}

function contandoMovimentos(){
    movimentos++;
    pontuacaoMovimentos.innerText = movimentos;
}

function movendoDiscos(targetId) {
    // Coluna 1
    if (targetId === torre1.id) {
        if (coluna1.childElementCount > 0 && !destino) {
            discoAtual = coluna1.lastElementChild;
            destino = true;
        } else if (
            coluna1.childElementCount > 0 &&
            destino &&
            discoAtual.clientWidth < coluna1.lastElementChild.clientWidth
        ) {
            coluna1.appendChild(discoAtual);
            destino = false;
            contandoMovimentos();
        } else if (
            coluna1.childElementCount > 0 &&
            destino &&
            discoAtual.clientWidth > coluna1.lastElementChild.clientWidth
        ) {
            discoAtual = "";
            destino = false;
        } else if (coluna1.childElementCount < 1 && destino) {
            coluna1.appendChild(discoAtual);
            destino = false;
            contandoMovimentos();
        }
    }
    // Coluna 2
    if (targetId === torre2.id) {
        if (coluna2.childElementCount > 0 && !destino) {
            discoAtual = coluna2.lastElementChild;
            destino = true;
        } else if (
            coluna2.childElementCount > 0 &&
            destino &&
            discoAtual.clientWidth < coluna2.lastElementChild.clientWidth
        ) {
            coluna2.appendChild(discoAtual);
            destino = false;
            contandoMovimentos();
        } else if (
            coluna2.childElementCount > 0 &&
            destino &&
            discoAtual.clientWidth > coluna2.lastElementChild.clientWidth
        ) {
            discoAtual = "";
            destino = false;
        } else if (coluna2.childElementCount < 1 && destino) {
            coluna2.appendChild(discoAtual);
            destino = false;
            contandoMovimentos();
        }
    }
    // Coluna 3
    if (targetId === torre3.id) {
        if (coluna3.childElementCount > 0 && !destino) {
              discoAtual = coluna3.lastElementChild;
              destino = true;
        } else if (
              coluna3.childElementCount > 0 &&
              destino &&
              discoAtual.clientWidth < coluna3.lastElementChild.clientWidth
        ) {
              coluna3.appendChild(discoAtual);
              destino = false;
              contandoMovimentos();
        } else if (
              coluna3.childElementCount > 0 &&
              destino &&
              discoAtual.clientWidth > coluna3.lastElementChild.clientWidth
        ) {
              discoAtual = "";
              destino = false;
        } else if (coluna3.childElementCount < 1 && destino) {
              coluna3.appendChild(discoAtual);
              destino = false;
              contandoMovimentos();
        }
    }
    // Mensagem de Fim de Jogo
    setTimeout(() => {
        if (coluna3.childElementCount > 3 && !destino || coluna2.childElementCount > 3 && !destino) {
            alert("FIM DE JOGO! Sua Pontuação foi: " + movimentos);
        }
    }, 2000);
}
