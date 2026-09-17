class Midia{
    #titulo
    #duracaoEmMinutos
    constructor(titulo, duracao){
        this.#titulo = titulo
        this.#duracaoEmMinutos = duracao
    }
    
    descricao(){
        return "Mídia adicionada ao catálogo"
    }

    get titulo(){
        return this.#titulo
    }
    get duracaoEmMinutos(){
        return this.#duracaoEmMinutos
    }
}

module.exports = Midia