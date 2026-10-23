const express = require("express")
const router = express.Router()
const artes = require("./artes")
const clientes = require("./clientes")
const promocoes = require("./promocoes")

router.get("/", (req, res) => {
    res.json({ "mensagem": "API de Estudio" })
})

router.use("/artes", artes)

router.use("/clientes", clientes)

router.use("/promocoes", promocoes)

module.exports = router