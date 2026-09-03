class Imposto {
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }

    #porcentagemImposto = 0.20

    #calcularImposto() {
        return this.salario * this.#porcentagemImposto
    }

    obterSalarioLiquido() {
        return this.salario - this.#calcularImposto()
    }
}

let pessoa1 = new Imposto('José', 1500)
console.log(`O salário líquido de ${pessoa1.nome} é R$ ${pessoa1.obterSalarioLiquido()}`)