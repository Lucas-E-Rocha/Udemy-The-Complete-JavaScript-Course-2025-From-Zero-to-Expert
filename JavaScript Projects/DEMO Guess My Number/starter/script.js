'use strict';
let secretNumber = generateSecretNumber()
let score = 20
let highscore = 0
let isFinished = false

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    //Test if the game has ended
    if (!isFinished) {
        //When there is no guess
        if (!guess) {
            updateMessage('🛑 No number!')
        }
        //When the player wins
        else if (guess === secretNumber) {
            updateBackGroundColor('#60b347')
            updateNumberBoxWidth('30rem')
            updateMessage('🎉 Correct number!')
            if (score > highscore) {
                updateHighScore(score)
            }
            updateVisibleNumber(secretNumber)
            isFinished = true
        }
        //When the player loses
        else if (score <= 1) {
            decreaseScore('💥 You lost the game!')
            isFinished = true
        }
        //When the guess is too high
        else if (guess > secretNumber) {
            decreaseScore('📈 Too high!')
        }
        //When the guess is too low
        else if (guess < secretNumber) {
            decreaseScore('📉 Too low!')
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    updateBackGroundColor('#222')
    updateNumberBoxWidth('15rem')
    updateMessage('Start guessing...')
    score = 20
    updateScore(score)
    updateVisibleNumber('?')
    secretNumber = generateSecretNumber()
    updateGuessBox('')
    isFinished = false
})

function updateHighScore(score) {
    document.querySelector('.highscore').textContent = score
    highscore = score
}

function updateGuessBox(number) {
    document.querySelector('.guess').value = number
}

function updateBackGroundColor(color) {
    document.querySelector('body').style.backgroundColor = color
}

function updateNumberBoxWidth(width) {
    document.querySelector('.number').style.width = width
}

function updateVisibleNumber(number) {
    document.querySelector('.number').textContent = number
}


function updateMessage(message) {
    document.querySelector('.message').textContent = message
}

function updateScore(score) {
    document.querySelector('.score').textContent = score
}

function decreaseScore(message) {
    score--
    updateScore(score)
    updateMessage(message)
}

function generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1
}