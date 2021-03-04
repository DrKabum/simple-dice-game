// Variables
let p1score = 0
let p2score = 0
let p1Turn = true

// Dices:
const p1Dice = document.getElementById("player1Dice")
const p2Dice = document.getElementById("player2Dice")

// Scoreboards:
const p1ScoreBoard = document.getElementById("player1Scoreboard")
const p2ScoreBoard = document.getElementById("player2Scoreboard")

// Buttons:
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

// message:
const message = document.getElementById("message")

// listeners:
rollBtn.addEventListener("click", play)
resetBtn.addEventListener("click", resetGame)

function roll() {
    return Math.floor(Math.random() * 6) + 1
}

function play() {
    const rollResult = roll()
    
    if(p1Turn) {
        p1Dice.innerHTML = rollResult
        p1score += rollResult
        p1ScoreBoard.innerHTML = p1score        
    } else {
        p2Dice.innerHTML = rollResult
        p2score += rollResult
        p2ScoreBoard.innerHTML = p2score        
    }

    if(isGameOver()) {
        message.textContent = `${p1Turn ? "Player 1" : "Player 2"} won! 🎉`
        rollBtn.style.display = "none"
        resetBtn.style.display = "inline-block"
    } else {
        switchActivePlayer()
    }
}

function isGameOver() {
    return p1score >= 20 || p2score >= 20
}

function switchActivePlayer() {
    p1Turn ? (
        p1Dice.classList.remove("active"),
        p2Dice.classList.add("active")
    ) : (
        p2Dice.classList.remove("active"),
        p1Dice.classList.add("active")
    )
    p1Turn = !p1Turn
    message.textContent = `${p1Turn ? "Player 1" : "Player 2"}'s turn`
}

function resetGame() {
    p1score = 0
    p2score = 0
    p1ScoreBoard.textContent = 0
    p2ScoreBoard.textContent = 0
    p1Dice.textContent = "-"
    p2Dice.textContent = "-"
    p2Dice.classList.remove("active")
    p1Dice.classList.add("active")
    message.textContent = `${p1Turn ? "Player 1" : "Player 2"}'s turn`
    resetBtn.style.display = "none"
    rollBtn.style.display = "inline-block"
    p1turn = true
}