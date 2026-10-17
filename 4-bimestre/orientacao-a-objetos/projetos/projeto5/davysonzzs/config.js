function carregarConfig(){
    return {
        servico: process.env.SERVICO ?? "oficina",
        porta: process.env.PORT === undefined ? 3000 : Number(process.env.PORT),
        ambiente: process.env.AMBIENTE ?? "desenvolvimento"
    }
}

module.exports = { carregarConfig }