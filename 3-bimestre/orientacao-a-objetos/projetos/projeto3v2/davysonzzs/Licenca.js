class Licenca{
    constructor(cliente){
        this.cliente = cliente
    }

    emitir(){
        return''
    }
}

class Trial extends Licenca{
    emitir(){
        return `Licença trial emitida para: ${this.cliente}`
    }
}

class Mensal extends Licenca{
    emitir(){
        return `Licença mensal emitida para: ${this.cliente}`
    }
}

class Anual extends Licenca{
    emitir(){
        return `Licença anual emitida para: ${this.cliente}`
    }
}

class Vitalicia extends Licenca{
    emitir(){
        return `Licença vitalícia emitida para: ${this.cliente}`
    }
}

module.exports = Licenca
module.exports.Trial = Trial
module.exports.Mensal = Mensal
module.exports.Anual = Anual
module.exports.Vitalicia = Vitalicia