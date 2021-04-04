const words = ["world", "home", "street", "tree", "dom", "script", "program", "java"]

let pickWord = function () {
    return words[Math.floor(Math.random() * words.length)]
}

let setupAnswerArray = function (word) {
    let answerArray = []
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = '_'
    }
    return answerArray
}

let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "))
}

let getGuess = function () {
    return prompt("Guess a letter, or click Cancel to stop playing.")
}

let updateGameState = function (guess, word, answerArray) {
    let counter = 0
    for (let i = 0; i < word.length; i++) {
        if(word[i] === guess){
            answerArray[i] = guess
            counter++
        }
    }
    return counter
}

let showAnswerAndCongratulatePlayer = function (answerArray) {
    alert(answerArray.join(" "))
    alert("Good job! The answer was: " + word)
}

let word = pickWord()
let answerArray = setupAnswerArray(word)
let remainingLetters = word.length

while (remainingLetters > 0) {
    showPlayerProgress(answerArray)
    let guess = getGuess()
    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.")
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray)
        remainingLetters -= correctGuesses
    }
}

showAnswerAndCongratulatePlayer(answerArray)