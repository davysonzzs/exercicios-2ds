const express = require("express")
const router = express.Router()
const alunos = require("./alunos")

router.get("/", (req, res) => {
    res.json({ "mensagem": "API da Escola" })
})

router.use("/alunos", alunos)

module.exports = router