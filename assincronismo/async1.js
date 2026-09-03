// Função que simula uma busca de dados
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    if (id === 1) {
      resolve({ id: 1, nome: "Carlos" });
    } else {
      reject("Usuário não encontrado!");
    }
  });
}


async function exibirUsuario() {
  try {
    const usuario = await buscarUsuario(1)
     console.log(`Usuário: ${usuario.nome}`)
  } catch(erro) { 
    console.error(`Erro: ${erro}`)
 }
}
exibirUsuario();