const express = require("express")
const encomendas = require("./routes/encomendas")
const app = express()

app.use(express.json())

app.use("/", encomendas)

app.use((req, res, next) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})

module.exports = app