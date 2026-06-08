const workHours = [7.5, 8, 6.5, 0, 8.5, 4.0]

function processHours(workHours) {
    const totalHours = workHours.reduce((previous, current) => previous + current)
    const averageHours = totalHours / workHours.length
    const longestDay = workHours.reduce((previous, current) => previous > current ? previous : current)
    console.log(`Total hours worked: ${totalHours}`)
    console.log(`Average daily hours: ${averageHours}`)
    console.log(`Day with most hours worked: ${longestDay}`)
}

processHours(workHours)