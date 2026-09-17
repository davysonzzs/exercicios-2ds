const CurtaMetragem = require("./CurtaMetragem");
const Documentario = require("./Documentario");
const Filme = require("./Filme");
const Serie = require("./Serie");

class MidiaFactory{
    static criar(tipo, titulo, duracao){
        if(tipo == "filme"){
            return new Filme(titulo, duracao)
        }
        if(tipo == "serie"){
            return new Serie(titulo, duracao)
        }
        if(tipo == "documentario"){
            return new Documentario(titulo, duracao)
        }
        if(tipo == "curtametragem"){
            return new CurtaMetragem(titulo, duracao)
        }

        throw new Error("Tipo de mídia inválido")
    }
}

module.exports = MidiaFactory