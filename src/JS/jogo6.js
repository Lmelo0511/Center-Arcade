//Torres
let torre1 = document.getElementById("torre1");
let torre2 = document.getElementById("torre2");
let torre3 = document.getElementById("torre3");

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
let pontuacaoMovimentos = 0;
pontuacaoMovimentos.document.getElementById("movimentos").textContent = pontuacaoMovimentos;

let destino = false;
let botaoRecomecar = document.getElementById("botao");
let discoAtual;

botaoRecomecar.addEventListener("click", recomecarJogo);

function recomecarJogo(){
    pontuacaoMovimentos = 0;
}

function contandoMovimentos(){
    pontuacaoMovimentos++;

}

function movendoDiscos() {
    
}