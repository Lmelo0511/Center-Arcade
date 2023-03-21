let numeroAleatorio = Math.floor(Math.random() * 10);
let tentativas = 0;
const limiteDeTentativas = 3;

function jogar() {
  const numero = parseInt(document.getElementById("numero").value);
  tentativas++;

  document.getElementById('numero').value = '';
  document.getElementById("mensagem").textContent = "";

  console.log(`Você jogou o número: ${numero}!`);
  console.log(`O computador jogou: ${numeroAleatorio}!`);

  if (numero === numeroAleatorio) {
    document.getElementById("mensagem").textContent = 'Você ganhou. Parabéns!';
    return;
  } else if (tentativas < limiteDeTentativas) {
    document.getElementById("mensagem").textContent = 'Você errou. Tente novamente.';
  } else {
    document.getElementById("mensagem").textContent = `Suas tentativas acabaram. O número era ${numeroAleatorio}.`;
  }
}

document.getElementById("mensagem2").textContent = '';

function reiniciarJogo() {
  tentativas = 0;
  numeroAleatorio = Math.floor(Math.random() * 10);
  document.getElementById('numero').value = '';
  document.getElementById('numero').disabled = false;
  document.getElementById('mensagem').innerHTML = '';
  document.getElementById('mensagem').textContent = '';
}
