const mensagem = document.getElementById("mensagem")
const botaoAlterar = document.getElementById("alterar")

botaoAlterar.addEventListener("click", () =>{
    mensagem.textContent = "Mensagem alterada com JavaScript"
})