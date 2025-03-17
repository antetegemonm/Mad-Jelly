let contador = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();

}, 5000)

function nextImage(){
    contador++;
    if(contador > 4){
        contador = 1 
    }
    document.getElementById("radio"+contador).checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
    const botoesAdicionar = document.querySelectorAll(".add-to-cart");

    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", () => {
            const produto = {
                id: botao.dataset.id,
                nome: botao.dataset.name,
                preco: botao.dataset.price,
                imagem: botao.dataset.img
            };

            let carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];

            carrinho.push(produto);

            sessionStorage.setItem("carrinho", JSON.stringify(carrinho));

            alert(`${produto.nome} adicionado ao carrinho!`);
        });
    });

    const linkProduto = document.querySelectorAll(".add-Product")

    linkProduto.forEach(link => {
        link.addEventListener("click", () =>{
            const produto = {
                id: link.dataset.id,
                category: link.dataset.category,
                nome: link.dataset.name,
                preco: link.dataset.price,
                imagem: link.dataset.img
            };
            
            let telaProduto = JSON.parse(sessionStorage.getItem("telaProduto")) || [];

            telaProduto.splice(0, telaProduto.length)
            telaProduto.push(produto);

            sessionStorage.setItem("telaProduto", JSON.stringify(telaProduto));

            console.log(telaProduto)
        })
    })
});
