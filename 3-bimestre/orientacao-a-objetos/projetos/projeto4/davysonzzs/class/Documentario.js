const Midia = require("./Midia");

class Documentario extends Midia{
    descricao(){
        return "Documentário disponível para reprodução"
    }
}

module.exports = Documentario