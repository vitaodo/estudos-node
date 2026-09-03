const city = 'city'
const name = 'name'
const person = {
    name: 'Vitor',
    age: 14,
    city: 'São Paulo'
}

console.log(`${person.name} lives in ${person.city}`)
console.log((person['name']) + ' lives in ' + (person['city']))   
console.log((person[name]) + ' lives in ' + (person[city]))