const $rockButtonPlayer1 = document.querySelector('.player-1-rock-button')
const $paperButtonPlayer1 = document.querySelector('.player-1-paper-button')
const $scissorButtonPlayer1 = document.querySelector('.player-1-scissor-button')

const $rockButtonPlayer2 = document.querySelector('.player-2-rock-button')
const $paperButtonPlayer2 = document.querySelector('.player-2-paper-button')
const $scissorButtonPlayer2 = document.querySelector('.player-2-scissor-button')

const $startGameButton = document.querySelector('.start-button')
const $resetGameButton = document.querySelector('.reset-button')

let $gameTitle = document.querySelector('.winner')

let $scorePlayer1 = document.querySelector('.player-1-score')
let $scorePlayer2 = document.querySelector('.player-2-score')

let $handPlayer1 = document.querySelector('.player-1-hand')
let $handPlayer2 = document.querySelector('.player-2-hand')

let movePlayer1 = ''
let movePlayer2 = ''

let player1Score = 0
let player2Score = 0

let gameStart = false

let winner = 0
// 0 = undefined / 1 = player 1 win / 2 = player 2 win / 3 = draw


function printGameState() {
    if (winner == 1) {
        $gameTitle.innerHTML = '<h1>Jogador 1 venceu</h1>'
    } else if (winner == 2) {
        $gameTitle.innerHTML = '<h1>Jogador 2 venceu</h1>'
    } else if (winner == 3) {
        $gameTitle.innerHTML = '<h1>Empate</h1>'
    } else if (winner == 0) {
        $gameTitle.innerHTML = '<h1>Game Iniciado</h1>'
    }
}

function setWinner() {
    if (movePlayer1 == '' || movePlayer2 == '') {
        return
    }

    if (movePlayer1 == 'rock' && movePlayer2 == 'paper') {
        winner = 2
    } else if (movePlayer1 == 'rock' && movePlayer2 == 'scissor') {
        winner = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'rock') {
        winner = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissor') {
        winner = 2
    } else if (movePlayer1 == 'scissor' && movePlayer2 == 'rock') {
        winner = 2
    } else if (movePlayer1 == 'scissor' && movePlayer2 == 'paper') {
        winner = 1
    } else if (movePlayer1 == movePlayer2) {
        winner = 3
    }
}
function addWinnerScore() {
    if (winner == 1) {
        player1Score = player1Score + 1
    } else if (winner == 2) {
        player2Score = player2Score + 1
    }
}
function printPlayerScore() {
    $scorePlayer1.innerHTML = player1Score.toString().padStart(2, '0')
    $scorePlayer2.innerHTML = player2Score.toString().padStart(2, '0')
}

function handleRockPlayer1() {
    if (gameStart == false) return
    $handPlayer1.innerHTML = '<img src="imagens/stone.png" alt="imagem de pedra" title="imagem de pedra">'
    movePlayer1 = 'rock'
    setWinner()
    addWinnerScore()
    printPlayerScore()
    printGameState()
    if (winner != 0) {
        setTimeout(resetBattleField(), 1000)
        resetMoveVariables()
        winner = 0
    }
}
function handlePaperPlayer1() {
    if (gameStart == false) return
    $handPlayer1.innerHTML = '<img src="imagens/paper.png" alt="imagem de papel" title="imagem de papel">'
    movePlayer1 = 'paper'
    setWinner()
    addWinnerScore()
    printPlayerScore()
    printGameState()
    if (winner != 0) {
        setTimeout(resetBattleField, 1000)
        resetMoveVariables()
        winner = 0
    }
}
function handleScissorPlayer1() {
    if (gameStart == false) return
    $handPlayer1.innerHTML = '<img src="imagens/scissors.png" alt="imagem de tesoura" title="imagem de tesoura">'
    movePlayer1 = 'scissor'
    setWinner()
    addWinnerScore()
    printPlayerScore()
    printGameState()
    if (winner != 0) {
        setTimeout(resetBattleField, 1000)
        resetMoveVariables()
        winner = 0
    }
}

function handleRockPlayer2() {
    if (gameStart == false) return
    $handPlayer2.innerHTML = '<img src="imagens/stone.png" alt="imagem de pedra" title="imagem de pedra">'
    movePlayer2 = 'rock'
    setWinner()
    addWinnerScore()
    printPlayerScore()
    printGameState()
    if (winner != 0) {
        setTimeout(resetBattleField, 1000)
        resetMoveVariables()
        winner = 0
    }
}
function handlePaperPlayer2() {
    if (gameStart == false) return
    $handPlayer2.innerHTML = '<img src="imagens/paper.png" alt="imagem de papel" title="imagem de papel">'
    movePlayer2 = 'paper'
    setWinner()
    addWinnerScore()
    printPlayerScore()
    printGameState()
    if (winner != 0) {
        setTimeout(resetBattleField, 1000)
        resetMoveVariables()
        winner = 0
    }
}
function handleScissorPlayer2() {
    if (gameStart == false) return
    $handPlayer2.innerHTML = '<img src="imagens/scissors.png" alt="imagem de tesoura" title="imagem de tesoura">'
    movePlayer2 = 'scissor'
    setWinner()
    addWinnerScore()
    printPlayerScore()
    printGameState()
    if (winner != 0) {
        setTimeout(resetBattleField, 1000)
        resetMoveVariables()
        winner = 0
    }
}

function resetBattleField() {
    $handPlayer1.innerHTML = ''
    $handPlayer2.innerHTML = ''
}

function resetMoveVariables() {
    movePlayer1 = ''
    movePlayer2 = ''
}

function resetScore() {
    player1Score = 0
    player2Score = 0
}

function handleToggleGameButton() {
    if (gameStart == true) {
        gameStart = false
        $startGameButton.textContent = 'Iniciar'
        $gameTitle.textContent = 'Jogo Parado'
        $startGameButton.classList.remove('started')
    } else {
        gameStart = true
        $startGameButton.textContent = 'Parar'
        $gameTitle.textContent = 'Jogo Iniciado'
        $startGameButton.classList.add('started')
    }
}
function handleResetGameButton() {
    resetMoveVariables()
    resetBattleField()
    resetScore()
    printPlayerScore()
    printGameState()
    if (gameStart == false) {
        $gameTitle.textContent = 'Jogo Parado'
    }
}


$rockButtonPlayer1.addEventListener('click', handleRockPlayer1)
$paperButtonPlayer1.addEventListener('click', handlePaperPlayer1)
$scissorButtonPlayer1.addEventListener('click', handleScissorPlayer1)

$rockButtonPlayer2.addEventListener('click', handleRockPlayer2)
$paperButtonPlayer2.addEventListener('click', handlePaperPlayer2)
$scissorButtonPlayer2.addEventListener('click', handleScissorPlayer2)

$startGameButton.addEventListener('click', handleToggleGameButton)
$resetGameButton.addEventListener('click', handleResetGameButton)