let carrinho = [];
let total = 0;

// Adiciona produto ao carrinho
function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

// Atualiza a lista do carrinho na tela
function atualizarCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

// Finaliza a compra e envia para a página do Pix
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  // Salva os dados no navegador
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  localStorage.setItem("total", total.toFixed(2));

  // Redireciona para o pagamento Pix
  window.location.href = "pix.html";
}
