function fazerPedido(item) {
  return new Promise((resolve, reject) => {
    console.log(`Fazendo pedido de ${item}...`);
    setTimeout(() => {
      resolve(item);
    }, 1000);
  });
}

  function prepararPedido(item) {
    return new Promise((resolve, reject) => {
      console.log('Preparando pedido...')
      setTimeout(() => {
        resolve(item);
      }, 1000);
    })
}

function entregarPedido(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.3) {
        resolve(item)
      } else {
        reject(new Error('Motoboy sumiu no mapa 😭'))
      }
    }, 1000)
  })  
}

fazerPedido("Pizza")
.then(item => prepararPedido(item)) 
.then(item => entregarPedido(item))
.then(item => console.log(`🎉 Pedido entregue: ${item}`))
.catch(erro => console.log('Oops, tivemos um erro na entrega:', erro.message))