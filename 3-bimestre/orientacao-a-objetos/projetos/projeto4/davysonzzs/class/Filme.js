const Midia = require("./Midia");

class Filme extends Midia {
    constructor(titulo, duracaoEmMinutos){
        super(titulo, duracaoEmMinutos)
        this.registros = []
    }

    descricao(){
        return "Filme disponível para reprodução"
    }

    adicionarRegistro(registro){
        if(registro.valor > 0){
            return this.registros?.push(registro)
        }
        
        throw new Error("Valor inválido")
    }
}

module.exports = Filme