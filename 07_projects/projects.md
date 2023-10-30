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