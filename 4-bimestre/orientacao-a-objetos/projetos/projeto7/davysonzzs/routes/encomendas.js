const express = require("express")
const validarEncomenda = require("../middlewares/validarEncomenda")
const router = express.Router()

const encomendas = [
    { id: 1, cliente: "Ana", doce: "Brigadeiro", quantidade: 50, status: "entregue" },
    { id: 2, cliente: "Bruno", doce: "Bolo de Pote", quantidade: 10, status: "produzindo" },
    { id: 3, cliente: "Carla", doce: "Torta", quantidade: 1, status: "produzindo" }
]

router.get("/encomendas", (req, res) => {
    const status = req.query.status
    const quantidadeMin = Number(req.query.quantidadeMin)
    if(status && quantidadeMin){
        return res.json(encomendas.filter(l => l.status == status && l.quantidade >= quantidadeMin))
    }
    if(status){
        return res.json(encomendas.filter(s => s.status == status))
    }
    if(quantidadeMin){
        return res.json(encomendas.filter(p => p.quantidade >= quantidadeMin))
    }

    res.json(encomendas)
})

router.get("/encomendas/resumo", (req, res) => {
    res.json({ "total": encomendas.length, "quantidadeTotal": encomendas.reduce((acumulador, atual) => {
        return acumulador + atual.quantidade
    }, 0) })
})

router.get("/encomendas/:id", (req, res, next) => {
    const id = Number(req.params.id)
    const encomendaQuery = encomendas.find(c => c.id == id)
    if(!encomendaQuery){
        res.status(404).json({ erro: "Encomenda nao encontrado"})
    }
    res.json(encomendaQuery)
})

router.post("/encomendas", validarEncomenda, (req, res) =>{
    const tamanho = encomendas.length
    const novaEncomenda = req.body
    novaEncomenda.id = tamanho + 1
    novaEncomenda.status = "recebida"
    encomendas.push(novaEncomenda)
    res.status(201).json({"mensagem": "Registro de encomenda criado"})
})


module.exports = router