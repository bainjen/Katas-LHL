//input value is nested arrays where sib-array contains 2 numbers
//The first will be the value to repeat, the second will be the amount of times to repeat that value.

//Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.


// INPUT

const repeatNumbers = function (data) {
  let retString = "";
  for (let d = 0; d < data.length; d++) {
    let pairs = data[d];
    // console.log(pairs); 
    // console.log(pairs[0]);
    // console.log(pairs[1]);
    // console.log('String!'.repeat(pairs[1]));
    // console.log(pairs[0].toString());
    let inString = pairs[0].toString();
    retString = inString.repeat(pairs[1]);
  }  
  return retString;
};



console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

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