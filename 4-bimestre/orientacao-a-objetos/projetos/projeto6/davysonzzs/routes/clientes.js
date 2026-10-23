const express = require("express")
const router = express.Router()

const clientes = [
    { id: 1, nome: "Ana", contato: "9999-1212" },
    { id: 2, nome: "Bruno", contato: "9999-1313" }
]

router.get("/", (req, res) => {
    res.json(clientes)
})

router.get("/total", (req, res) =>{
    res.json({ "total": clientes.length })
})

module.exports = router