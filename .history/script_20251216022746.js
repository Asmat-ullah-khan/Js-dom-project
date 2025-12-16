'use strict';
// document.querySelector('.message').textContent = '🎉 Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secrectNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secrectNumber;
  } else if (guess > secrectNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈 Too high!';
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  } else if (guess < secrectNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉 Too low!';
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});
