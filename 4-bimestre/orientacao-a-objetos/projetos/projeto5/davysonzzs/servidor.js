const http = require("node:http")
const index = require("./index")

const servidor = http.createServer(index)
const { porta } = carregarConfig()

servidor.listen(porta)

module.exports = servidor