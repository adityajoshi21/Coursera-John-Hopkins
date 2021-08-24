'use strict';

//NUMBER TO BE GUESSED
let secretnumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretnumber;
document.querySelector('.number').textContent = '**';
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '👎 Enter a VALID number!';
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretnumber
          ? '📉 Guess was too low!'
          : '📈 Guess was too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = '0';
      document.querySelector('.message').textContent =
        '😑 You lost, Try Again?';
    }

    //before we implemented DEY principle
    //   } else if (guess < secretnumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📉 Guess was too low!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.score').textContent = '0';
    //       document.querySelector('.message').textContent =
    //         '😑 You lost, Try Again?';
    //     }
    //   } else if (guess > secretnumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📈 Guess was too high!';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.score').textContent = 0;
    //       document.querySelector('.message').textContent =
    //         '😑 You lost, Try Again?';
    // }
  } else {
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('.message').textContent = '😎 You got it right!!';
    document.querySelector('body').style.backgroundColor = 'hsl(140,90%,38%)';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

//implemenzing resetting the game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '**';
  score = 20;
  //re-assigning secretnumber to a new value
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//implemeting high score
