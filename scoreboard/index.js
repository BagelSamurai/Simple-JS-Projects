let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let winnerEl = document.getElementById("winner-text")

// Initialize the display
homeScoreEl.innerText = homeScore
guestScoreEl.innerText = guestScore

function addPoints(team, points) {
    // 1. Update the numerical values
    if (team === 'home') {
        homeScore += points
        homeScoreEl.textContent = homeScore
    } else {
        guestScore += points
        guestScoreEl.textContent = guestScore
    }

    // 2. Update the leader text with correct math
    if (homeScore > guestScore) {
        let diff = homeScore - guestScore
        winnerEl.textContent = "Home is leading by " + diff + " points"
    } 
    else if (guestScore > homeScore) {
        let diff = guestScore - homeScore
        winnerEl.textContent = "Guest is leading by " + diff + " points"
    } 
    else {
        winnerEl.textContent = "The game is currently tied!"
    }
}