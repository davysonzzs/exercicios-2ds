class Funcionario{
    #salario
    static #quatidade = 0
    constructor(nome, cargo, salario){
        this.nome = nome
        this.cargo = cargo
        this.#salario = salario
        Funcionario.#quatidade++
    }

    get salario(){
        return this.#salario
    }

    static get quantidade(){
        return this.#quatidade
    }

    static quantidadeFuncionarios(){
        return Funcionario.#quatidade
    }

    apresentar(){
        return `${this.nome} - ${this.cargo}`
    }

    set salario(novoSalario){
        if(novoSalario >= 0){
            this.#salario = novoSalario
        }
    }

}
module.exports = Funcionario