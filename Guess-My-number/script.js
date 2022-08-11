'use strict';

/*
DOM :- Structured representation of html documents. Allows javascript to access html
elements and style to manipulate them.
*/
/*
document.querySelector('.message').textContent = 'uday shankar😒';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '💕';
document.querySelector('.score').textContent = 555;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
/*

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const number = function (number) {
  document.querySelector('.number').textContent = number;
};
const numberWidth = function (number) {
  document.querySelector('.number').style.width = number;
};

// document.querySelector('.number').textContent = secretNumber;
// number(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number';
    displayMessage('no number');
  }

  // when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'correct number';
    displayMessage('correct number');
    // document.querySelector('.number').textContent = secretNumber;
    number(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '30rem';
    numberWidth('30rem');

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   guess < secretNumber ? 'too low' : 'too high';
      displayMessage(guess < secretNumber ? 'too low' : 'too high');
    } else {
      // document.querySelector('.message').textContent = 'You loss the game';
      displayMessage('You loss the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  console.log(secretNumber);
  // when it is too lose
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'too low';
  //   } else {
  //     document.querySelector('.message').textContent = 'You loss the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //  when it is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'to high';
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'start guessing!!!';
  displayMessage('start guessing!!!');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.number').textContent = secretNumber;
  // number(secretNumber);

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  // document.querySelector('.number').textContent = '?';
  number('?');
  // document.querySelector('.number').style.width = '13rem';
  numberWidth('13rem');
});

// // console.log(document.querySelector('.guess'));
// // console.log(secretNumber);
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// // document.querySelector('.number').textContent = secretNumber;
// let highscore = 0;
// document.querySelector('.check').addEventListener('click', function () {
//   let guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//   // checking weather input enter or not
//   if (!guess) {
//     document.querySelector('.message').textContent = 'please provide input';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'you won the game';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
//   //  if guess number is less than secret number
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   // if guess number is greater than secret number
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '13rem';
//   document.querySelector('.message').textContent = 'Start guessing!!!';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
// });
