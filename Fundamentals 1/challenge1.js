const massMark = 78, heightMark = 1.69, massJohn = 95, heightJohn = 1.88
let BMIMark, BMIJohn

function calculateBMI(mass, height) {
    return mass / (height * height)
}

BMIMark = calculateBMI(massMark, heightMark)
BMIJohn = calculateBMI(massJohn, heightJohn)

const markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark)
console.log(BMIJohn)
console.log(markHigherBMI)