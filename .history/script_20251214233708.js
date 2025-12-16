'use strict';
// document.querySelector('.message').textContent = '🎉 Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
});
