class Conta {
    constructor(nome, numero, saldo) {
        this.nome = nome
        this.numero = numero
        this.saldo = saldo
    }   
}

class ContaPoupanca extends Conta {
    #taxaDeSaque = 0.10

    saque (valor) {
        let taxaDeSaqueDoValor = valor * this.#taxaDeSaque
        let valorDeSaqueComATaxa = valor + taxaDeSaqueDoValor

        if (valorDeSaqueComATaxa > this.saldo) {
            throw new Error ('Saldo insuficiente')
        }

        this.saldo = this.saldo - valorDeSaqueComATaxa
        console.log(`O saldo atual após o saque é de: ${this.saldo}`)
    }
}

let novaContaPoupanca = new ContaPoupanca('Teste', '123', 1000)
novaContaPoupanca.saque(100)