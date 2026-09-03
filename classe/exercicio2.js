class Pessoa { 
    constructor(nome, telefone, email) {
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }

    falar () {
        console.log(`${this.nome} está falando `)
    }

    andar () {
        console.log(`${this.nome} está andando`)
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, telefone, email, cpf) {
        super(nome, telefone, email)

        this.cpf = cpf
    }
}

class PessoaJuridica extends Pessoa{
    constructor(nome, telefone, email, cnpj) {
        super(nome, telefone, email)

        this.cnpj = cnpj
    }

    pagarSalarios () {
        console.log(`${this.nome} pagou os salários`)
    }
}

let pessoa1 = new PessoaFisica('José', '123456', 'jose@jose.com', '123456')
pessoa1.andar()
console.log(pessoa1.nome, pessoa1.cpf)

let pessoa2 = new PessoaJuridica('Maria', '654321', 'maria@maria.com', '654321')
pessoa2.andar()
pessoa2.pagarSalarios()