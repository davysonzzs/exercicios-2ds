const express = require("express")
const router = express.Router()

const alunos = [
    { id: 1, nome: "Ana", nota: 8 },
    { id: 2, nome: "Bruno", nota: 6 }
]

router.get("/", (req, res) => {
    res.json(alunos)
})

router.get("/aprovados", (req, res) => {
    res.json(alunos.reduce((acu, atual) => {
        return [atual.nota > acu.nota ? atual : acu]
    }))
})

module.exports = router