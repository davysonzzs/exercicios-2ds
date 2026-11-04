function validarEncomenda(req, res, next){
    if(!req.body.cliente){
        return res.status(400).json({ erro: "O campo cliente e obrigatorio"})
    }
    if(!req.body.doce){
        return res.status(400).json({ erro: "O campo doce e obrigatorio"})
    }
    if(typeof req.body.quantidade != "number"){
        return res.status(400).json({ erro: "O campo quantidade deve ser um numero"})
    }
    if(Number(req.body.quantidade) <= 0){
        return res.status(400).json({erro: "O campo quantidade deve ser maior que zero"})
    }

    next()
}

module.exports = validarEncomenda