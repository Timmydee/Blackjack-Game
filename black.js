
let sum = 0
cards = []
let isAlive = false
let hasBlackJack = false

let message = ''
let cardEl = document.getElementById("card-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")



function getRandom(){
    return Math.floor(Math.random() * 6) + 1
}
function startGame (){
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card"
    } else if(sum == 21){
        message = "You have got blackjack"
        hasBlackJack = true;
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}
function newGame(){
    if(isAlive == true && hasBlackJack == false ){
        let card = getRandom()
        sum += card
        cards.push(card)
        renderGame()

    }
    
}

