'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 23;

// document.querySelector('.guess').value = 43;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let didWin = true;
function revealEverything(win, score) {
  if (win) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (didWin) highScore = highScore + score;
    document.querySelector('.highscore').textContent = highScore;
    didWin = false;
  } else {
    document.querySelector('body').style.backgroundColor = '#ff2424';
    highScore = 0;
    document.querySelector('.highscore').textContent = highScore;
  }
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '30rem';
  console.log(highScore);
}

function wrongNumber(message) {
  document.querySelector('.message').textContent = `Too ${message}!`;
  score--;
  document.querySelector('.score').textContent = score;
}
function youLost() {
  document.querySelector('.message').textContent = 'You lost:(';
  revealEverything(false, score);
}

document.querySelector('.check').addEventListener('click', processGuess);
document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    processGuess();
  }
});
function processGuess() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    revealEverything(true, score);
  } else if (guess >= secretNumber) {
    if (score > 1) {
      wrongNumber('High');
    } else {
      youLost();
    }
  } else if (guess <= secretNumber) {
    if (score > 1) {
      wrongNumber('Low');
    } else {
      youLost();
    }
  }
}

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  didWin = true;
});
