class Pessoa {
    nome 

    get username  () {
        return this.nome
    }

    set setNome (nome) {
        if(!nome) {
            throw new Error('O nome não pode ser vazio')
        }

        if(this.verificaCaracteresEspeciais(nome)) {
            throw new Error('O nome não pode conter caracteres especiais')
        }
        this.nome = nome
    }

    verificaCaracteresEspeciais(string) {
        const regex = /[@!#$%&*()/\|]/
        return regex.test(string)
    }
}

let pessoa = new Pessoa() 
pessoa.setNome = 'Rotiv'
console.log(pessoa.username)