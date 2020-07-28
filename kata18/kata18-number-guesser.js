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


let random = Math.round(Math.random() * 100 + 1)

// console.log(random);

let prompt = require("prompt-sync")();
let answer = prompt(`Guess a number between 0 and 100 and random num is ${random}: `);
let answers = []; 
// console.log(typeof answer)


while (parseInt(answer) !== random) {
  answer = prompt('Guess again: ')
}


// code below (replace this example)
// let answer = prompt("Guess a number: ");
// console.log("You answered: " + answer);