const workHours = [7.5, 8, 6.5, 0, 8.5, 4, 0]

function processHours(workHours) {
    let totalHours = 0
    let daysWorked = 0
    const longestDay = {
        hours: 0,
        day: 0
    }
    for (let i = 0; i < workHours.length; i++) {
        const hours = workHours[i]
        if (hours > 0) {
            if (longestDay.hours < hours) {
                longestDay.hours = hours
                longestDay.day = i + 1
            }
            totalHours += hours
            daysWorked++
        }
    }

    const averageHours = totalHours / daysWorked
    const isFullTime = totalHours >= 35 ? '' : ' not'

    console.log(`Total hours worked: ${totalHours}`)
    console.log(`Average daily hours: ${averageHours}`)
    console.log(`Day with most hours worked: ${numberDayToString(longestDay.day)}`)
    console.log(`Days worked: ${daysWorked}`)
    console.log(`It was${isFullTime} a full-time week`)
}

function numberDayToString(day) {
    switch (day) {
        case 1:
            return 'Sunday';
        case 2:
            return 'Monday';
        case 3:
            return 'Tuesday';
        case 4:
            return 'Wednesday';
        case 5:
            return 'Thursday';
        case 6:
            return 'Friday';
        case 7:
            return 'Saturday';
        default:
            return 'Invalid Day';
    }
}

processHours(workHours)