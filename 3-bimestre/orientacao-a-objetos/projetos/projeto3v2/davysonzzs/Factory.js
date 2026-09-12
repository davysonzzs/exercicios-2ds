const Licenca = require("./Licenca")

class Factory{
    static criar(tipo, cliente){
        //cliente
        if(cliente == ""){
            throw new Error("Cliente é obrigatório")
        }

        if(tipo == "trial"){
            return new Licenca.Trial(cliente)
        } else if(tipo == "mensal"){
            return new Licenca.Mensal(cliente)
        } else if(tipo == "anual"){
            return new Licenca.Anual(cliente)
        } else if(tipo == "vitalicia"){
            return new Licenca.Vitalicia(cliente)
        }

        throw new Error("Tipo de licença inválido")
    }
}

module.exports = Factory