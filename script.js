let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco}`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function finalizarCompra() {
  alert("Pagamento será integrado aqui (Pix / Cartão)");
}
