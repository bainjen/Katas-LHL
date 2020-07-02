//input value is nested arrays where sib-array contains 2 numbers
//The first will be the value to repeat, the second will be the amount of times to repeat that value.

//Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.


// INPUT

// const repeatNumbers = function (data) {
//   // let retString = "";
//   let newArray = []; 
//   for (let d = 0; d < data.length; d++) {
//     const pairs = data[d];
//     // for (let a = 0; a < pairs.length; a++) {
//       const numOne = pairs[0];
//       const numTwo = pairs[1];
//     //   // console.log(numOne);
//     // console.log(numTwo);
//     let string = numOne.toString();
//     const retString = string.repeat(numTwo);
  
//     // console.log(typeof retString)
//     // retString = retString.concat(string);
//     // console.log(retString.concat(","));
//     // console.log(typeof (retString));
//     // console.log(retString);
//     newArray.push(retString);
//     // console.log(newArray);

//     //^^^this is returning the right answers but not in strings separated by commas. 
   
//       // console.log(pairs[1]); 
//       // console.log(pairs[0])
//       // console.log(data[d]);
//       // console.log(pairs[0]);
//       // console.log(pairs[1]);
//       // console.log('String!'.repeat(pairs[1]));
//       // console.log(pairs[0].toString());
 
//       // // console.log(inString + pairs[1]);
//       // let firstNum = pairs[0];
//       // // console.log(firstNum);
//       // let inString = firstNum.toString();
//       // // console.log(inString);
//       // retString = inString.repeat(pairs[1]);

    
//     // }
  
//   }  
//   // return retString;
//   return newArray.join(", "); 
// };



// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

//EXPECTED OUTPUT
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292

// array[index]--> will access each pair array. set this to a variable to access inside of nested arrays // 

//CURRENTLY SEEING
// jenniferbain in ~/lighthouse/katas
// $ node kata6.1-repeating-nums.js 
// 1111111111
// 222
// 9292

//realized I need to be accessing each nested array, not just one. 

//CLEANED UP SOLUTION: 

const repeatNumbers = function (data) {

  let newArray = []; 

  for (let d = 0; d < data.length; d++) {
    const pairs = data[d];
    const numOne = pairs[0];
    const numTwo = pairs[1];
    
    let string = numOne.toString();
    const retString = string.repeat(numTwo);

    newArray.push(retString);
  
  }  
  return newArray.join(", "); 
};



console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));