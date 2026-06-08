const temperatures = [17, 21, 23]

function printForecast(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}ºC in ${i + 1} days `
    }
    str += '...'
    console.log(str)
}

printForecast(temperatures)