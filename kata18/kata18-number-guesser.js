// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

// Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.

//1. prompt a response baded on whether the number is too small or too large
//  a. too big - return (too high)
//  b. too small - return (too low)
//  c. not a number - return (error message)
//  d. repeated number - return (already guessed it)
//  e. correct answer - return (YES + # of attempts)

//2. count each attempt to return when correct answer is guessed 
//  a. excpet if answer is a repeat
//  b. except if answer is not a number


let random = Math.round(Math.random() * 100);
let prompt = require("prompt-sync")();
let answer = prompt(`Guess a number between 0 and 100 and random num is ${random}: `);
let answers = []; 

while (answer != random) {

  const answerAlreadyExists = answers.includes(answer);

  if (isNaN(answer) || answer === '') {
    answer = prompt("Oops, that's not a number. Guess a number: ");
  }
  
  else if (answer < random) {
    if (answerAlreadyExists) {
      answer = prompt("You aready tired that! Guess a new number: ");
    } else {
      answers.push(answer);
      answer = prompt("Too low! Guess again: ");
    }
  }
  else if (answer > random) {
    if (answerAlreadyExists) {
      answer = prompt("You aready tired that! Guess a new number: ");
    } else {
      answers.push(answer);
      answer = prompt("Too high! Guess again: ");
    }
  }
  else {
    answers.push(answer); 
    answer = prompt("Something's not right. I had an error. Try again: ");
  } 
}

const unique = [...new Set(answers)];
let attempts = unique.length +1;

if (attempts === 1) {
  console.log(`Ding! Ding! Ding! WOAH! ${random} is correct. Did you cheat? You got that right on your first try--HIGH FIVE!`);
}
if (attempts === 2) {
  console.log(`Ding! Ding! Ding! ${random} is correct You got it right on your second guess. eProps to you!`);
}
if (attempts > 2 && attempts < 15) {
  console.log(`Ding! Ding! Ding! ${random} is correct. You took ${attempts} guesses to figure that out. Not too shabby!`);
}
if (attempts >= 15) {
  console.log(`Ding! Ding! Ding! Finally! ${random} is correct. Are you tired yet!? Because it took ${attempts} guesses to figure that out. Time for a nap! zzz...`);
}




// code below (replace this example)
// let answer = prompt("Guess a number: ");
// console.log("You answered: " + answer);



// vagrant [kata18]> node kata18-number-guesser.js 
// Guess a number between 0 and 100 and random num is 69: 99
// Too high! Guess again: 99
// You aready tired that! Guess a new number: 99
// Too high! Guess again: 99
// You aready tired that! Guess a new number: 66
// Too low! Guess again: 66
// You aready tired that! Guess a new number: 66
// Too low! Guess again: 76
// Too high! Guess again: 44
// Too low! Guess again: bh
// Oops, that's not a number. Guess a number: j
// Oops, that's not a number. Guess a number: u8
// Oops, that's not a number. Guess a number: 98
// Too high! Guess again: 69
// [ '99', '99', '66', '66', '76', '44', 'bh', 'j', 'u8', '98' ]
// Ding! Ding! Ding! 69 is correct. You took (numebr) guesses to figure that out. Not too shabby!



// uhhhhh...

// vagrant [kata18]> node kata18-number-guesser.js 
// Guess a number between 0 and 100 and random num is 101: 12
// Too low! Guess again: 111
// Too high! Guess again: 101
// [ '12', '111' ]
// Ding! Ding! Ding! 101 is correct. You took (numebr) guesses to figure that out. Not too shabby!



  // if (answers.includes(answer)) {
  //   // answer = prompt("You aready tired that! Guess a new number: ")
  //   console.log("you've already have done that")
  // }


  // for (let i = 0; i < answers.length; i++) {
  //   if (answers[i] == answer ) {
  //     answer = prompt("You aready tired that! Guess a new number: ")
  //   }   
  // }

