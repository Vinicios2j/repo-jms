const database = {
    "bat624": "Cod: 700",
    "tiao": "Cod: 2200"
};

function pesquisarProduto() {
    const input = document.getElementById("idProduct").value.trim().toLowerCase();
    const output = document.getElementById("infoProduto");

    if (database[input]) {
        output.textContent = database[input];
        output.style.color = "green";
    } else {
        output.textContent = "Produto não encontrado.";
        output.style.color = "red"; 
    }
}

document.getElementById("btnPesquisar").addEventListener("click", pesquisarProduto);
