class Produto{
    #preco
    constructor(preco){
        this.#preco = preco
    }
    get preco(){
        return this.#preco
    }
    set preco(novopreco){
        if(novopreco >= 0){
            this.#preco = novopreco
        }
    }
}

const produto100 = new Produto(100)
module.exports = produto100