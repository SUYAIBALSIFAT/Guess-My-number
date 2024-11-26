'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage('❌ NO Number!');

    //document.querySelector('.message').textContent = '❌ NO Number!';

    // when player wins
  } else if (guess === SecretNumber) {
    displayMessage('🎉 Correct Number!');

    //document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    // when guess is different
  } else if (guess != SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? '📈 Too High!' : '📉 Too Low!');

      // document.querySelector('.message').textContent =
      //   guess > SecretNumber ? '📈 Too High!' : '📉 Too Low!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');

      //   document.querySelector('.message').textContent = '💥 You lost the game';

      document.querySelector('.score').textContent = 0;
    }
  } else {
    displayMessage('💥 You lost the game');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.check').textContent = '';
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
