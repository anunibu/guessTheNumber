'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.score').textContent--;

  if (document.querySelector('.score').textContent < 1) {
    displayMessage('🤯 You lose!');
    document.querySelector('.score').textContent = 0;
  } else if (!guess) {
    displayMessage('⛔ No number! Try again');
    document.querySelector('.score').textContent++;
  } else if (guess > secretNumber) displayMessage('🙃 Too high, Try again');
  else if (guess < secretNumber) displayMessage('🙃 Too low, Try again');
  else {
    displayMessage('🥳 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.highscore').textContent =
    document.querySelector('.score').textContent;
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');

  document.querySelector('.number').style.width = '15 rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
