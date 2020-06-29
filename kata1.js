//given an array of 2+ nums -- find the 2 largest nums in array and sum them together

// let arrayOne = [4, 3, 6, 3, 2, 8, 14, 12, 3, 56]
// let bigNum = arrayOne.reduce();
// console.log(bigNum);
// let red = arrayOne.reduce(function (a, b) {
//   return Math.max(a, b);
// });
// console.log(red);
// console.log(Math.max(1, 3, 6, 2))
// for (let i = 0; i < arrayOne.length; i++) {
//   let bigNum = Math.reduce(arrayOne);
//   console.log(bigNum);

// }

// let data = [3, 6, 4, 2, 8, 9, 4, 2];
  // let integers = []; 
  // let numOne = Math.max(...data);
  // integers.push(numOne);
  // console.log(integers);
  // let newArray = data.pop(numOne);
  // console.log(newArray);
  // let splicedArray = data.splice(data.indexOf(numOne), 1);
  // console.log(splicedArray);
  // let numTwo = Math.max(...splicedArray);
  // integers.push(numTwo);
  // console.log(integers);

const sumLargestNumbers = function (data) {

 
  for (let i = 0; i < data.length; i++)
  for (let j = 0; j < i; j++)
      if (data[i] < data[j]) {
        let x = data[i];
        data[i] = data[j];
        data[j] = x;
      }

  // console.log(data);
 let reverseData = data.reverse();
  // console.log(reverseData);

  let numOne = reverseData[0];
  let numTwo = reverseData[1];
  let largestNumSum = numOne + numTwo;
  return largestNumSum;

};


console.log(sumLargestNumbers([4, 6, 1, 8, 2, 76, 32, 64, 2, 89, 100]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// let numOne = ;
// let numTwo = ;
// let sum = numOne + numTwo;
// return sum 




// let numTwo = (data) => {
//   let max = Math.max.apply(null, data);
//   data.splice(data.indexOf(max), 1);
//   max = Math.max.apply(null, data);
//   console.log(max);
// }


// const sumLargestNumbers = function (data) {
//   let holderArr = [5];
//   let largestNum = data.reduce(function (a, b) {
//     Math.max(a, b);
//   })
//   holderArr.push(largestNum);
//   return holderArr;
// }

      // let holderArr = [];
  // let largestNum = data.reduce(function (a, b) {
  //   Math.max(a, b);
  // holderArr.push(largestNum);
  // console.log(holderArr);
  // }
  // for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    // console.log(Math.max(data));


// sumLargestNumbers([2, 4, 5, 2, 6, 8, 1]);


//find largest number, add to a new array, splice largest number, find second largest number, add to array. 

//find math.max --> push to a new, empty array. then, pop the number. find math.max again, push this number to the array with previous math.max)