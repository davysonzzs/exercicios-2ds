const lista = document.getElementById("lista")
const botaoAdicionar = document.getElementById("adicionar")

botaoAdicionar.addEventListener("click", () => {
    const itemLista = document.createElement("li")
    itemLista.textContent = "Novo Item"
    lista.appendChild(itemLista)
})