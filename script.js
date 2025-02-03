document.addEventListener("DOMContentLoaded", function () {
    const botoesAdicionar = document.querySelectorAll(".adicionar-carrinho");
    const listaCarrinho = document.getElementById("itens-carrinho");
    const totalCarrinho = document.getElementById("total");
    let total = 0;

    function atualizarTotal(valor, adicionar = true) {
        if (adicionar) {
            total += valor;
        } else {
            total -= valor;
        }
        totalCarrinho.textContent = total.toFixed(2);
    }

    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", function () {
            const produto = this.parentElement;
            const nomeDoce = produto.querySelector("p").textContent;
            const preco = parseFloat(produto.getAttribute("data-preco"));

            const novoItem = document.createElement("li");
            novoItem.innerHTML = `${nomeDoce} <button class="remover-item">🗑️</button>`;
            novoItem.setAttribute("data-preco", preco);
            listaCarrinho.appendChild(novoItem);

            atualizarTotal(preco);

            novoItem.querySelector(".remover-item").addEventListener("click", function () {
                listaCarrinho.removeChild(novoItem);
                atualizarTotal(preco, false);
            });
        });
    });
});
