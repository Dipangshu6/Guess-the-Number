let random = parseInt(Math.random() * 100 + 1)

//id's
const submit = document.querySelector('#submit')
const display = document.querySelector('#display')
const userinput = document.querySelector('#GuessField')

//classes
const startOver = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.LastResult')

//buttons
const startbt = document.querySelector('#start')
const endbt = document.querySelector('#end')

let PreviousGuess = [];
let numGuess = 1;
let leftGuesses = 10

let playGame = true;

submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (playGame) {
        const guess = parseInt(userinput.value, 10)
        validate(guess)
    }
});

startbt.addEventListener('click', newGame)
endbt.addEventListener('click', endGame)




function validate(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number greater than 0')
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100')
    }
    else {
        PreviousGuess.push(guess)
        if (numGuess === 11) {
            checkGuess(guess)
            displayMessage(`Game is over.The number was ${random}`)
            endGame()
        } else {
            checkGuess(guess)
        }
    }
}    

function checkGuess(guess) {
    if (guess === random){
        displayMessage(`You guessed it correct.The random number was ${random}`)
        displayGuess(guess)
        endGame()
    }
    else if (guess > random) {
        displayMessage(`The number is TOO higher`)
        displayGuess(guess)
        numGuess++;
    }
    else if (guess < random) {
        displayMessage(`The number is Too Low`)
        displayGuess(guess)
        numGuess++;
    }   
}

function displayGuess(guess) {
     userinput.value = ''
     guessSlot.innerHTML +=`${guess} ,`
     leftGuesses = (11 - numGuess);
     remaining.innerHTML = `${leftGuesses}`
}
    
function displayMessage(message) {
    display.innerHTML = `<h2>${message}</h2>`
}
    
function endGame() {
    playGame = false;
    userinput.disabled = true
    submit.disabled = true
    endbt.disabled = true
    displayMessage(`Game ended. The number was ${random}`)
}

function newGame() {
    random = parseInt(Math.random() * 100 + 1)
    playGame = true;
    userinput.disabled = false
    submit.disabled = false
    endbt.disabled = false
    numGuess = 1;
    leftGuesses = 10;
    PreviousGuess = [];
    userinput.value = ''
    guessSlot.innerHTML = ""
    remaining.innerHTML = '10'
    displayMessage('New game started. Make a guess!')
}



