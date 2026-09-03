function buscarProduto(id) {
    return new Promise ((resolve, reject) => {
        if(id === 10) {
           resolve({id: 10, nome: 'Teclado Mechanical'})
        } else { 
         reject('Produto não encontrado')
        }
    }) 
}

async function mostrarProduto() {
    
    try {
       const produto = await buscarProduto(10)
    console.log(`id: ${produto.id}, nome: ${produto.nome}`)
    } catch (erro) {
        console.log(`Erro: ${erro}`)
    }
}

mostrarProduto()