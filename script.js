let scoreElHome = document.getElementById('score-display-home')
let scoreElGuest = document.getElementById('score-display-guest')

let countHome = 0
let countGuest = 0

function incrementOneHome() {
    countHome = countHome + 1
    scoreElHome.textContent = countHome
}

function incrementTwoHome() {
    countHome = countHome + 2
    scoreElHome.textContent = countHome
}

function incrementThreeHome() {
    countHome = countHome + 3
    scoreElHome.textContent = countHome
}

function incrementOneGuest() {
    countGuest = countGuest + 1
    scoreElGuest.textContent = countGuest
}

function incrementTwoGuest() {
    countGuest = countGuest + 2
    scoreElGuest.textContent = countGuest
}

function incrementThreeGuest() {
    countGuest = countGuest + 3
    scoreElGuest.textContent = countGuest
}
