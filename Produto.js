document.addEventListener("DOMContentLoaded", () => {
    const contProduto = document.getElementById("container");
    const titulo = document.getElementById("titulo");
    let telaProduto = JSON.parse(sessionStorage.getItem("telaProduto")) || [];

    function atualizarProduto() {
        contProduto.innerHTML = "";
        titulo.innerHTML = "";

        telaProduto.forEach((produto) => {
            let item = document.createElement("div");
            let nome = document.createElement("div");
            item.classList.add("produto");

            item.innerHTML = `
                <div class="imagem">
                    <img src="${produto.imagem}" alt="Imagem do produto">
                </div>
                <div class="infos">
                    <div id="preco">
                        <h4>R$ ${(produto.preco / 1).toFixed(2)}</h4>
                        <p>à vista</p>
                    </div>
                    <div id="parcela">
                        <p>Ou até <strong>10x</strong> de R$<strong>${(produto.preco / 10).toFixed(2)}</strong></p>
                    </div>
                    <button id="add-carrinho">Adicionar ao carrinho</button>
                </div>
            `;

            nome.innerHTML = `<h1>${produto.nome}</h1>`;
            contProduto.appendChild(item);
            titulo.appendChild(nome);

            // Adicionando evento ao botão "Adicionar ao carrinho"
            item.querySelector("#add-carrinho").addEventListener("click", () => {
                let carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];

                carrinho.push(produto);

                sessionStorage.setItem("carrinho", JSON.stringify(carrinho));

                alert(`${produto.nome} adicionado ao carrinho!`);
            });
        });
    }

    atualizarProduto();
});
