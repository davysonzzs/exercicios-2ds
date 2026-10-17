const projeto = {
    nome: "aula01",
    scripts: ["test", "start", "dev"],

    rodar(script){
        return `Executando: npm run ${script}`
    },

    temScript(script){
        if(this.scripts.includes(script)){
            return true
        }
        return false
    }
}

module.exports = projeto