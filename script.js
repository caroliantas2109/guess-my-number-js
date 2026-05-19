'use strict';

// Generate random number (1–20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Reusable function to change message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Check Button
document.querySelector('.check').addEventListener('click', function () {
  // Get input value and convert to number
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `No number!`;
    displayMessage('No number! ⛔'); //This is how to DRY the code, I'm learning so I'm just trying to make small changes

    //Number is less than 1 OR number is greater than 20.
  } else if (guess < 1 || guess > 20) {
    displayMessage('Choose a number between 1 and 20 ⚠️');

    // Correct guess
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 😃🥳');
    document.querySelector('.number').textContent = secretNumber;

    // Change styles when player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // Wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high 😅' : 'Too low 🥲');

      // This version works, but it repeats the same code multiple times.
      // To follow DRY (Don't Repeat Yourself), we should reduce repetition.
      // Writing clean code is important, even in small projects.
      // In larger projects, repetition can lead to bugs and harder maintenance.

      /* WRONG GUESS (before using ternary)
      if (score > 1) {
        if (guess > secretNumber) {
          document.querySelector('.message').textContent = 'Too high 😅';
        } else {
          document.querySelector('.message').textContent = 'Too low 🥲';
        }

        score--;
        document.querySelector('.score').textContent = score;

      } else {
        document.querySelector('.message').textContent =
          'You lost the game 🥹, try again!';
        document.querySelector('.score').textContent = 0;
      }
      */

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 🥹, try again!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Again Button
document.querySelector('.again').addEventListener('click', function () {
  // Reset values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset text
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  // Clear input
  document.querySelector('.guess').value = '';

  // Reset styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
