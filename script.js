'use strict';

let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector("body").addEventListener('keydown', function (event){
  if(event.key=="Enter"){
    document.querySelector(".check").click();
  }
})

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  document.querySelector('.message').textContent = 'Start \n\ guessing...';
  document.querySelector("body").classList.remove("green");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".again").classList.remove("red");
});

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    let reply = "";
    let correctGuess = false;
  if (score > 0 && !correctGuess) {
    if (!guess || guess < 1 || guess > 20) {
      reply = 'Enter a number in range 1 to 20!';
    } else if (guess < randomNumber) {
      reply = 'Guess is lower than my number.';
    } else if (guess > randomNumber) {
      reply = 'Guess is higher than my number.';
    } else if (guess === randomNumber) {
      correctGuess = true;
    }
    if (!correctGuess) {
      score -= 1;
      document.querySelector('.label-score').textContent = `Score: ${score}`;
    } else {
      reply = `Yes ${randomNumber} is my number! `;
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector("body").classList.add("green");
      document.querySelector(".again").classList.add("red");
      if (score > highscore) {
        highscore=score;
        reply += "\n NEW HIGH SCORE!!";
        document.querySelector('.label-highscore').textContent = "🥇 Highscore: " + highscore;
      }
    }
    if (score === 0) {
      reply = 'Game Over! \nClick Again to play again';
    }
    document.querySelector('.message').textContent =reply;
  }
});