// Multiplication Table
// We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

// Create a function named multiplicationTable that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.



const multiplicationTable = function(maxValue) { 
  let numArray = []
  let table = '';

  if (maxValue === 0 || maxValue === 1) {
    numArray.push(maxValue); 

  } else if (maxValue > 1) {
  
    for (let x = 1; x <= maxValue; x++) {
      numArray.push(x);
    }
  }
 
  for (let i = 0; i < numArray.length; i++) {
    let column = numArray[i];
    for (let j = 0; j < numArray.length; j++) {
      let row = numArray[j];
      let multiples = (row * column); 
      if (row % maxValue === 0) {
        table += multiples + "\n";
      } else {
        table += multiples + " ";
      } 
    } 
  }
  return table; 
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


// const multiplicationTable = function(maxValue) { 
//   let numArray = []
//   let table = '';

//   if (maxValue === 0 || maxValue === 1) {
//     numArray.push(maxValue); 

//   } else if (maxValue > 1) {
  
//     for (let x = 1; x <= maxValue; x++) {
//       numArray.push(x);
//     }
//   }
 
//   for (let i = 0; i < numArray.length; i++) {
// //take column and multiply by row
//     let column = numArray[i];
//     // console.log(column); 
//     for (let j = 0; j < numArray.length; j++) {
//       // console.log(numArray[j]);
//       let row = numArray[j];
//       let multiples = (row * column); 
//       if (row % maxValue === 0) {
//         table += multiples + "\n";
//       } else {
//         table += multiples + " ";
//       }
      
//     }  

//     }
 
//   // if (table % maxValue === 0); table += '\n';
//   //        console.log(table); 
     
//   return table; 

// }

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));


// EXPECTED OUTPUT
// 1

// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25 

// 1 2 3 4 5 6 7 8 9 10
// 2 4 6 8 10 12 14 16 18 20
// 3 6 9 12 15 18 21 24 27 30
// 4 8 12 16 20 24 28 32 36 40
// 5 10 15 20 25 30 35 40 45 50
// 6 12 18 24 30 36 42 48 54 60
// 7 14 21 28 35 42 49 56 63 70
// 8 16 24 32 40 48 56 64 72 80
// 9 18 27 36 45 54 63 72 81 90
// 10 20 30 40 50 60 70 80 90 100


// I need to take that number and create an array equal in length. I can loop through the array and on each number, multiply it as many times -- also using a loop...? Nested loop?
//Each time I loop through, I need to push my findings into a new...string? 
//leveraging the index to help me. 


//  for (let x = 1; x <= 10; x++) {
//   console.log(x); 
//   numArray.push(x); 
//   console.log(numArray); 
// }