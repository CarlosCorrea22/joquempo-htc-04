const $scorePlayer1 = document.querySelector('.player-1-score')
const $scorePlayer2 = document.querySelector('.player-2-score')

const $rockButtonPlayer1 = document.querySelector('.player-1-rock-button')
const $paperButtonPlayer1 = document.querySelector('.player-1-paper-button')
const $scissorButtonPlayer1 = document.querySelector('.player-1-scissor-button')

const $rockButtonPlayer2 = document.querySelector('.player-2-rock-button')
const $paperButtonPlayer2 = document.querySelector('.player-2-paper-button')
const $scissorButtonPlayer2 = document.querySelector('.player-2-scissor-button')

const $handPlayer1 = document.querySelector('.player-1-hand')
const $handPlayer2 = document.querySelector('.player-2-hand')

const $startGameButton = document.querySelector('.start-button')
const $resetGameButton = document.querySelector('.reset-button')


function scorePlayer1() {
    
}
function scorePlayer2() {
    
}

function handleRockPlayer1() {
    $handPlayer1.innerHTML = '<img src="imagens/stone.png" alt="imagem de pedra" title="imagem de pedra">'
}
function handlePaperPlayer1() {
    $handPlayer1.innerHTML = '<img src="imagens/paper.png" alt="imagem de papel" title="imagem de papel">'
}
function handleScissorPlayer1() {
    $handPlayer1.innerHTML = '<img src="imagens/scissors.png" alt="imagem de tesoura" title="imagem de tesoura">'
}

function handleRockPlayer2() {
    $handPlayer2.innerHTML = '<img src="imagens/stone.png" alt="imagem de pedra" title="imagem de pedra">'
}
function handlePaperPlayer2() {
    $handPlayer2.innerHTML = '<img src="imagens/paper.png" alt="imagem de papel" title="imagem de papel">'
}
function handleScissorPlayer2() {
    $handPlayer2.innerHTML = '<img src="imagens/scissors.png" alt="imagem de tesoura" title="imagem de tesoura">'
}

function handleStartGameButton() {
    
}
function handleResetGameButton() {
    
}


$rockButtonPlayer1.addEventListener('click', handleRockPlayer1)
$paperButtonPlayer1.addEventListener('click', handlePaperPlayer1)
$scissorButtonPlayer1.addEventListener('click', handleScissorPlayer1)

$rockButtonPlayer2.addEventListener('click', handleRockPlayer2)
$paperButtonPlayer2.addEventListener('click', handlePaperPlayer2)
$scissorButtonPlayer2.addEventListener('click', handleScissorPlayer2)

$startGameButton.addEventListener('click', handleStartGameButton)
$resetGameButton.addEventListener('click', handleResetGameButton)