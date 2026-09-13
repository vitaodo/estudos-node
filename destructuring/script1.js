const cores = ['vermelho', 'verde', 'azul']

const [primeira, , terceira] = cores
console.log(terceira)

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

function mostrarPessoa({ nome, idade}) {
console.log(`${nome} tem ${idade} anos`)
}

const pessoa = { nome: 'Vito', idade: 18, cidade: 'São Paulo'}
mostrarPessoa(pessoa)

function criarUsuario({ nome, email, senha }) {
  console.log(`Criando usuário ${nome} com email ${email}`);
  // ... lógica de criar usuário, ignorando outros campos que vieram no body
}

function criarUsuario({ nome, email, senha, ativo = true }) {
  console.log(ativo); // true, se ninguém passou "ativo"
}

criarUsuario({ nome: "Vito", email: "vito@email.com", senha: "123" });
