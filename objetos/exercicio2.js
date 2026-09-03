const student = {
    name: 'Vitor',
    grades: [7, 8.5, 6]
} 

let sum = 0


for(let i = 0; i < student.grades.length; i++){
    sum += student.grades[i] 
}

const media = sum / student.grades.length

console.log(media.toFixed(2))
console.log(student.grades[0])
