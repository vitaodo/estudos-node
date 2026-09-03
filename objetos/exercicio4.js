const obj1 = {
    value: 10,
}
//vai ser escrito 20//
const obj2 = obj1
    obj2.value = 20
console.log(obj1.value)

// escrito 20 porque os dois apontam pra mesma caixa//

const obj3 = {...obj1} 
obj3.value = 30
console.log(obj1.value, obj3.value)