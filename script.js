const carrinho = document.getElementById("carrinho");
const explosao = document.getElementById("explosao");

// Carrinho vai pra frente
setTimeout(() => {
  carrinho.style.left = "100%";
  document.getElementById("buzina").play();
}, 100);

// Carrinho dá ré
setTimeout(() => {
  carrinho.style.left = "30%";
}, 4500);

// Explosão + pergunta
setTimeout(() => {
  explosao.style.display = "block";
  document.getElementById("boom").play();
}, 6500);

setTimeout(() => {
  explosao.style.display = "none";
  document.getElementById("pergunta").style.display = "block";
}, 8000);

function responder(resposta) {
  const boom = document.getElementById("boom");
  const derrp = document.getElementById("derrp");
  const sus = document.getElementById("sus");

  if (resposta === 'sim') {
    boom.play();
    alert("Você escolheu sim.");
  } else {
    derrp.play();
    sus.play();
    piscarTela();
    alert("Você escolheu não.");
  }
}

function piscarTela() {
  let count = 0;
  const interval = setInterval(() => {
    document.body.style.backgroundColor = (count % 2 === 0) ? 'black' : 'white';
    count++;
    if (count > 5) {
      clearInterval(interval);
      document.body.style.backgroundColor = 'white';
    }
  }, 100);
}
