
// const camelCase = input => {
//   let stringArray = input.split(" ");
//   console.log(stringArray);
//   let newArray = []

//   for (let i = 1; i < stringArray.length; i++) {
//     let x = stringArray[i][0]; 
//     console.log(x);
//     let y = stringArray[i][i];
//     console.log(y);

//     if (i = x) {
//       x = x.toUpperCase();
//       newArray.push(x);
//     }
    
//     else  {
//       newArray.push(y);
//     }
   
//   }
//   console.log(newArray);
// }

// console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));

// // Create a function named camelCase that will convert a string to camel case, and return the result.

// const camelCase = function (input) {

//   let stringArray = input.split(" ");
//   //^^this works to make an array of each string, separating each word into an index. 

//   let camelCaseArray = [];
//   let firstWord = stringArray[0];

//   // console.log(stringArray);

//   camelCaseArray.push(firstWord);
//   console.log(camelCaseArray);
//   //^^this adds the first word of the input into the camel case array, untouched

// //  console.log(stringArray.shift());
//   stringArray.shift();
//   console.log(stringArray);
//   //^^this removes the first word of the input from the string array so we can now manipulate only the remainig words 
//   for (let i = 0; i < stringArray.length; i++) {
//     let firstLetter = stringArray[i][0].toUpperCase();
//     firstLetter.replace(stringArray[i][0])
//     console.log(stringArray);
//     // camelCaseArray.push(firstLetter);
//     // stringArray.splice([i][0], 1)
//     // console.log(camelCaseArray);
//     // console.log(stringArray); 

//     // for (let j = 0; j < stringArray[i].length; j++) {
     
//     //   camelCaseArray.push(stringArray[i][j]);
//       // console.log(camelCaseArray);
//     }
    


  
//   // console.log(stringArray[0]);

// };

// console.log(camelCase("this is a string"));
// // console.log(camelCase("loopy lighthouse"));
// // console.log(camelCase("supercalifragalisticexpialidocious"));


// // Output
// // thisIsAString
// // loopyLighthouse
// // supercalifragalisticexpialidocious


const camelCase = input => {
    let stringArray = input.split(" ");
  console.log(stringArray);
  // if index of string array = 0 then push to new array
  // else capitalize first letter and then push new to array
  // then join array and return
  

}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


// > str
// 'james'
// > str.slice(1)
// 'ames'
// > str.slice(1)
// 'ames'
// > str.slice(2)
// 'mes'
// > str.slice(1)
// 'ames'
// > str[0]
// 'j'
// > str[0].toUpperCase()
// 'J'
// > let newString = `${str[0].toUpperCase()}${str.slice(1)}`
// undefined
// > newString
// 'James'
// > let newString2 = str[0].toUpperCase() + str.slice(1)
// undefined
// > newString2
// 'James'
// > 
