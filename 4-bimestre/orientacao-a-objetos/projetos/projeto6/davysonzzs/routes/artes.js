const express = require("express")
const router = express.Router()

const artes = [
    { id: 1, nome: "Minimalista", estilo: "fineline", preco: 200, disponivel: true },
    { id: 2, nome: "Geometrica", estilo: "blackwork", preco: 450, disponivel: true },
    { id: 3, nome: "Realista", estilo: "realismo", preco: 900, disponivel: false }
]

router.get("/", (req, res) =>{
    res.json(artes)
})

router.post("/", (req, res) => {
    res.status(201).json({ "mensagem": "Cadastro de arte realizado" })
})

router.get("/disponiveis", (req, res) => {
    const disponiveis = []

    artes.forEach((e) => {
        if(e.disponivel){
            disponiveis.push(e)
        }
    })

    res.json(disponiveis)
})

router.get("/total", (req, res) => {
    res.json({ "total": artes.length })
})

module.exports = router