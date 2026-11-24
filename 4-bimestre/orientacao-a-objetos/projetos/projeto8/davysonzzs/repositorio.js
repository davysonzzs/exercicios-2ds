const fs = require("fs/promises")
const path = process.env.ARQUIVO_PROJETOS 

async function listar() {
    try{
        const arquivo = await fs.readFile(path, "utf-8")
        return JSON.parse(arquivo, null, 2)
    } catch (erro){
        return []
    }
}

async function salvar(projeto) {
    let dados = []
    try{
        const arquivo = await fs.readFile(path, "utf-8")
        dados = JSON.parse(arquivo)
    } catch(erro){
        if(erro.code !== 'ENOENT'){
            throw erro
        }
    }
    dados?.push(projeto)
    await fs.writeFile(path, JSON.stringify(dados, null, 2))
    return projeto
}

async function atualizar(id, dadoNovo) {
    const arquivo = await fs.readFile(path, "utf-8")
    const dados = JSON.parse(arquivo)
    const i = dados.findIndex(c => c.id == id)
    if(i == -1){
        return null
    }
    dados[i] = { ...dados[i], ...dadoNovo}
    await fs.writeFile(path, JSON.stringify(dados, null, 2))
    return dados[i]
}

async function remover(id) {
    const arquivo = await fs.readFile(path, "utf-8")
    const dados = JSON.parse(arquivo)
    const i = dados.findIndex(c => c.id == id)
    if(i == -1){
        return false
    }
    const resto = dados.filter(c => c.id !== id)
    await fs.writeFile(path, JSON.stringify(resto, null, 2))
    return true
}

async function contar() {
    let dados = []

    try{
        const arquivo = await fs.readFile(path, "utf-8")
        dados = JSON.parse(arquivo)
    } catch(erro){
        if(erro.code !== 'ENOENT'){
            throw erro
        }
    }
    return dados.length
}

module.exports = { listar, salvar, atualizar, remover, contar }