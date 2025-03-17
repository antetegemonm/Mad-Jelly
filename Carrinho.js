document.addEventListener("DOMContentLoaded", () => {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalElemento = document.getElementById("total");
    const botaoLimpar = document.getElementById("limpar-carrinho");
    const botaoGerarPix = document.getElementById("gerar-pix");
    const overlay = document.getElementById("overlay");
    const fechar = document.getElementById("fechar");

    let carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = "";
        let total = 0;

        carrinho.forEach((produto, index) => {
            let item = document.createElement("li");
            item.innerHTML = `
                <div class="imagem">
                <img src="${produto.imagem}" >
                </div>
                <div class="infos">
                <p>${produto.nome}</p>
                <p> R$${(produto.preco / 1).toFixed(2)}</p>
                <button class="button-remover" onclick="removerItem(${index})">REMOVER</button>
                </div>
            `;
            listaCarrinho.appendChild(item);
            total += parseFloat(produto.preco);
        });

        totalElemento.textContent = ` R$ ${(total / 1).toFixed(2)}`;
    }

    window.removerItem = (index) => {
        carrinho.splice(index, 1);
        sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
        atualizarCarrinho();
    };

    botaoLimpar.addEventListener("click", () => {
        sessionStorage.removeItem("carrinho");
        carrinho = [];
        atualizarCarrinho();
    });

   
    botaoGerarPix.addEventListener("click", () => {
        overlay.style.display = "flex"; 
    });

   
   
    window.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    atualizarCarrinho();
});
