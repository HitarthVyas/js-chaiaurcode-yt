# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);  // to know from where this event is coming
    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }
  })
})
```
## Solution 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if(height === '' || height<=0 || isNaN(height)) {
    console.log(`please provide a valid height`)
  } else if(weight === '' || weight<=0 || isNaN(weight)) {
    console.log(`please provide a valid weight`)
  } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`
  }
});
```

## Solution 3

```javascript
const clock = document.getElementById('clock');

setInterval(() => {
  const date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## Solution 4

```javascript
const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowORHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

const validateGuess = (guess) => {
  if(isNaN(guess)) {
    alert('Please enter a valid number.')
  }
  else if(guess<1) {
    console.log('Please enter a number greater than 1.')
  }
  else if(guess>100) {
    console.log('Please enter a number less than 100.');
  }
  else {
    if(numGuess==11) {
      // prevGuess.push(guess);
      dispalyGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame()
    } else {
      dispalyGuess(guess);
      checkGuess(guess);
    }
  }
}

const checkGuess = (guess) => {
  if(guess === randomNumber) {
    displayMessage('You guessed it right.');
    endGame();
  }
  else if(guess < randomNumber) {
    displayMessage('Number is too low.')
  }
  else {
    displayMessage('Number is too high.');
  }
}

const dispalyGuess = (guess) => {
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

const displayMessage = (message) => {
  lowORHi.innerHTML = `<h2>${message}</h2>`
}

const endGame = () => {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

const newGame = () => {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', () => {
    const randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.setAttribute('disabled', '')
    startOver.removeChild(p)

    playGame = true
  })
}
```