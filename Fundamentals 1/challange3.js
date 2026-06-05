class Team {
    constructor(name, scores) {
        this.name = name,
            this.scores = scores,
            this.averageScores = calculateAverage(this.scores)
    }
}

const dolphins = new Team("Dolphins", [1, 2, 3])
const koalas = new Team("Koalas", [4, 5, 6])

const scoreDolphins = dolphins.averageScores
const scoreKoalas = koalas.averageScores

function calculateAverage(scores) {
    return scores.reduce((previousValue, currentValue) => previousValue + currentValue) / scores.length;
}

function printWinner(team1, team2) {
    let winner = 'Both'
    if (team1.averageScores > team2.averageScores) {
        winner = team1.name
    } else if (team1.averageScores < team2.averageScores) {
        winner = team2.name
    }
    console.log(`${winner} win the trophy!`)
}

printWinner(dolphins, koalas)