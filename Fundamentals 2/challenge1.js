const calcAverage = (game1, game2, game3) => (game1 + game2 + game3) / 3

const scoreDolphins = calcAverage(85, 54, 41)
const scoreKoalas = calcAverage(23, 34, 27)

function checkWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= scoreKoalas * 2) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
    } else if (scoreKoalas >= scoreDolphins * 2) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`)
    } else console.log('No Team wins...')
}

checkWinner(scoreDolphins, scoreKoalas)

