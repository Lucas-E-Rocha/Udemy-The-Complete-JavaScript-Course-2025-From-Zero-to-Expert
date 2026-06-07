const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 95,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

function printResults(person1, person2) {
    let lowestBMI, highestBMI
    [lowestBMI, highestBMI] = person1.calcBMI() > person2.calcBMI() ? [person2, person1] : [person1, person2]
    console.log(`${highestBMI.fullName}'s BMI (${highestBMI.bmi}) is higher than ${lowestBMI.fullName}'s (${lowestBMI.bmi})!`)
}

printResults(mark, john)