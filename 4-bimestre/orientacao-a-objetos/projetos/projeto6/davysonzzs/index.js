const express = require("express")
const app = express()
const rotas = require("./routes/index")

app.use("/api", rotas)

module.exports = app