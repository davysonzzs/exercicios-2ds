const Midia = require("./Midia");

class Serie extends Midia{
    descricao(){
        return "Série disponível para reprodução"
    }
}

module.exports = Serie