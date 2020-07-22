//We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

//Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

// Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

// camel, pascal, snake, kebab, title
// vowel, consonant
// upper, lower

// Our function should be able to handle all of these cases.


const makeCase = function (input, caseType) {

  let caseTypeArray;

  if (!Array.isArray(caseType)) {
    caseTypeArray = [caseType];
  } else {
    caseTypeArray = caseType; 
  }
  
  let newInput = input;

  for (let singleCaseType of caseTypeArray) {
    let resultString = "";
    switch (singleCaseType) {
    
      case "camel":
        for (let i = 0; i < newInput.length; i++) {
          if (newInput[i] === " ") {
            resultString += newInput[i + 1].toUpperCase();
            i++;
          }
          else {
            resultString += newInput[i];
          }
        }
        break;
    
      case "pascal":
        for (let i = 0; i < newInput.length; i++) {
          if (i === 0) {
            resultString += newInput[i].toUpperCase();
          }
          else if (newInput[i] === " ") {
            resultString += newInput[i + 1].toUpperCase();
            i++;
          }
          else {
            resultString += newInput[i];
          }
        }
        break;
     
      case "snake":
        for (let i = 0; i < newInput.length; i++) {
          if (newInput[i] === " ") {
            resultString += "_";
          }
          else {
            resultString += newInput[i];
          }
        }
        break;
  
      case "kebab":
        for (let i = 0; i < newInput.length; i++) {
          if (newInput[i] === " ") {
            resultString += "-";
          }
          else {
            resultString += newInput[i];
          }
        }
        break;
  
      case "title":
        for (let i = 0; i < newInput.length; i++) {
          if (i === 0) {
            resultString += newInput[i].toUpperCase();
          }
          else if (newInput[i] === " ") {
            resultString += newInput[i];
            resultString += newInput[i + 1].toUpperCase();
            i++;
          }
          else {
            resultString += newInput[i];
          }
        }
        break;
  
      case "vowel":
        for (let i = 0; i < newInput.length; i++) {
          if (newInput[i] === "a" || newInput[i] === "e" || newInput[i] === "i" || newInput[i] === "o" || newInput[i] === "u") {
            resultString += newInput[i].toUpperCase();
          }
          else {
            resultString += newInput[i];
          }
        }
        break;
    
      case "consonant":
        for (let i = 0; i < newInput.length; i++) {
          if (newInput[i] === "a" || newInput[i] === "e" || newInput[i] === "i" || newInput[i] === "o" || newInput[i] === "u") {
            resultString += newInput[i];
          }
          else {
            resultString += newInput[i].toUpperCase();
          }
        }
        break;
    
      case "upper":
        resultString += newInput.toUpperCase();
        break;
     
      case "lower":
        resultString += newInput.toLowerCase();
        break;
    }
    newInput = resultString;
  }
  return newInput;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this IS a string", "upper"));
console.log(makeCase("this is a STring", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));



// const makeCase = function (input, caseType) {
  
//   // let resultString = "";
  
//   let caseTypeArray;

//   if (!Array.isArray(caseType)) {
//     caseTypeArray = [caseType];
//   } else {
//     caseTypeArray = caseType; 
//   }
  
//   let newInput = input;

//   for (let singleCaseType of caseTypeArray) {
//     let resultString = "";
//     switch (singleCaseType) {
    
//       case "camel":
//         for (let i = 0; i < newInput.length; i++) {
//           if (newInput[i] === " ") {
//             resultString += newInput[i + 1].toUpperCase();
//             i++;
//           }
//           else {
//             resultString += newInput[i];
//           }
//         }
//         // return resultString;
//         break;
    
//       case "pascal":
//         for (let i = 0; i < newInput.length; i++) {
//           if (i === 0) {
//             resultString += newInput[i].toUpperCase();
//           }
//           else if (newInput[i] === " ") {
//             resultString += newInput[i + 1].toUpperCase();
//             i++;
//           }
//           else {
//             resultString += newInput[i];
//           }
//         }
//         // return resultString;
//         break;
     
//       case "snake":
//         for (let i = 0; i < newInput.length; i++) {
//           if (newInput[i] === " ") {
//             resultString += "_";
//           }
//           else {
//             resultString += newInput[i];
//           }
//         }
//         // return resultString;
//         break;
  
//       case "kebab":
//         for (let i = 0; i < newInput.length; i++) {
//           if (newInput[i] === " ") {
//             resultString += "-";
//           }
//           else {
//             resultString += newInput[i];
//           }
//         }
//         // return resultString;
//         break;
  
//       case "title":
//         for (let i = 0; i < newInput.length; i++) {
//           if (i === 0) {
//             resultString += newInput[i].toUpperCase();
//           }
//           else if (newInput[i] === " ") {
//             resultString += newInput[i];
//             resultString += newInput[i + 1].toUpperCase();
//             i++;
//           }
//           else {
//             resultString += newInput[i];
//           }
//         }
//         // return resultString;
//         break;
  
//       case "vowel":
//         for (let i = 0; i < newInput.length; i++) {
//           if (newInput[i] === "a" || newInput[i] === "e" || newInput[i] === "i" || newInput[i] === "o" || newInput[i] === "u") {
//             resultString += newInput[i].toUpperCase();
//           }
//           else {
//             resultString += newInput[i];
//           }
//         }
//         // return resultString;
//         break;
    
//       case "consonant":
//         for (let i = 0; i < newInput.length; i++) {
//           if (newInput[i] === "a" || newInput[i] === "e" || newInput[i] === "i" || newInput[i] === "o" || newInput[i] === "u") {
//             resultString += newInput[i];
//           }
//           else {
//             resultString += newInput[i].toUpperCase();
//           }
//         }
//         // return resultString;
//         break;
    
//       case "upper":
//         resultString += newInput.toUpperCase();
//         // return resultString;
//         break;
     
//       case "lower":
//         resultString += newInput.toLowerCase();
//         // return resultString;
//         break;
    
//       default:
//         // return resultString;


//     }
//     newInput = resultString;
//   }
//   return newInput;
// }


// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this IS a string", "upper"));
// console.log(makeCase("this is a STring", "lower"));
// console.log(makeCase("this is a string", ["upper", "snake"]));


// Expected Output
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING

    // const camelCase = input => {
  //   let stringArray = input.split(" ");
  //   let pushedArray = []
  
  //   for (let i = 0; i < stringArray.length; i++) {
  //     let word = stringArray[i]; 
  //     if (word === stringArray[0]) {
  //       pushedArray.push(word); 
  //     }
  //     else {
  //       word.slice(1);
  //       let newString = word[0].toUpperCase() + word.slice(1); 
  //       pushedArray.push(newString);
  
  //     }
  //   }
  //   return pushedArray.join('')
  // }

  // for (let i = 0; i < input.length; i++) {
  //   console.log(input[i])
  // } 