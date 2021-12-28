const inputEl = document.getElementById('input')
const btn = document.getElementById('btn')
const resultText = document.getElementById('result-text')
const resultCard = document.querySelector('.result')
const card = document.getElementById('card')

// Event Listeners for the game
btn.addEventListener('click', startGame)

// clearing the input
inputEl.value = ''

// creating the win function
function win() {
  // creating the span element
  let span = document.createElement('span')
  // adding the class to the span
  span.classList.add('win')
  // adding the text to the span
  span.textContent = 'You win!'
  // appending the span to the resultText('p')
  resultText.appendChild(span)
}

// creating the lose function
function lose() {
  // creating the span element
  let span = document.createElement('span')
  // adding the class to the span
  span.classList.add('lose')
  // adding the text to the span
  span.textContent = `You lose!`
  // appending the span to the resultText('p')
  resultText.appendChild(span)
}

// shutdown and Restarting the game
function changebtn() {
  // changing the button text to Play Again
  btn.textContent = 'Play Again'
  // adding the event listener to the Play Again button
  card.addEventListener('mousedown', function () {
    if (btn.textContent === 'Play Again') {
      // remove the event Listeners on the startGame
      btn.removeEventListener('click', startGame)
      // reloading the page
      location.reload()
    }
  })
}

// starting the guess game
function startGame() {
  // calling the restart function
  changebtn()
  // creating the random number
  const num = Math.floor(Math.random() * 10 + 1)
  // getting the input value and turning it into a number
  const guess = Number(inputEl.value)
  // creting the logic for the game
  if (guess === num) {
    win()
  } else {
    lose()
  }
  // showing the result on the screen
  resultCard.classList.add('show')
  // clearing the input
  inputEl.value = ''
  console.log(num)
}
