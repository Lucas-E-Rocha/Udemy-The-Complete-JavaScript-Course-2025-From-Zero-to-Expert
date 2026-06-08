class Person {
    constructor(name, mass, height) {
        this.name = name,
            this.mass = mass,
            this.height = height
        this.BMI = calculateBMI(this.mass, this.height)
    }
}

const massMark = 78, heightMark = 1.69, massJohn = 95, heightJohn = 1.95

const Mark = new Person('Mark', massMark, heightMark)
const John = new Person('John', massJohn, heightJohn)

const BMIMark = Mark.BMI
const BMIJohn = John.BMI

function calculateBMI(mass, height) {
    return mass / (height * height)
}

function printResults(lowestBMI, highestBMI) {
    [lowestBMI, highestBMI] = lowestBMI.BMI > highestBMI.BMI ? [highestBMI, lowestBMI] : [lowestBMI, highestBMI]
    console.log(`${highestBMI.name}'s BMI (${highestBMI.BMI}) is higher than ${lowestBMI.name}'s (${lowestBMI.BMI})!`)
}

printResults(John, Mark)