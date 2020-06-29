//adding only the numbers in the array that match the condition
//instructions: 
// Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

// let conditionalSum = (numArray, condition) => {
//   let evenNums = [];
//   let oddNums = [];

//   for (let i = 0; i < numArray.length; i++) {
//     let number = numArray[i];
//     if (number % 2 === 0) {
//       evenNums.push(number);
//     } else {
//       oddNums.push(number);    
//     }
//   }

//   if (condition === 'even') {
//     const evenSum = evenNums => evenNums.reduce((a, b) => a + b, 0);
//     return evenSum(evenNums);
    
    
//   } else if (condition === 'odd') {
//     const oddSum = oddNums => oddNums.reduce((a, b) => a + b, 0);
//     return oddSum(oddNums);
//     }
// }

// anArray = [1, 2, 4, 4, 5, 7, 5, 3, 8, 3];

// console.log(conditionalSum(anArray, 'even'))
// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));

//this works, but I see it is too clunky and could be rewritten in a better way... so let's try it below... 



let conditionalSum = (numArray, condition) => {
  let solution = 0;

  for (i = 0; i < numArray.length; i++) {
    let number = numArray[i];
    if (condition === 'even' && number % 2 === 0) {
      solution += number;
    } else if (condition === 'odd' && number % 2 !== 0) {
      solution += number;
    }
  
  }
  return solution;
}

anArray = [1, 2, 4, 4, 5, 7, 5, 3, 8, 3];

console.log(conditionalSum(anArray, 'even'))
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 9], "odd"));
console.log(conditionalSum([13, 88, 12, 40, 99], "even"));
console.log(conditionalSum([0, 2, 4, 6], "odd"));