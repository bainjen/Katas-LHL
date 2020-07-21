//We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

//Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

// Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

// camel, pascal, snake, kebab, title
// vowel, consonant
// upper, lower

// Our function should be able to handle all of these cases.

const makeCase = function (input, caseType) {
  
  resultString = "";

  switch (caseType) {
    
    case "camel":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          resultString += input[i + 1].toUpperCase();
          i++;
        }
        else {
          resultString += input[i]; 
        }
      } 
      return resultString;
      break; 
    
    case "pascal":
      for (let i = 0; i < input.length; i++) {
        if (i === 0) {
          resultString += input[i].toUpperCase();
        }
        else if (input[i] === " ") {
          resultString += input[i + 1].toUpperCase();
          i++;
        }
        else {
          resultString += input[i]; 
       }
     } 
    return resultString;
    break; 
     
    case "snake":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          resultString += "_";
        }
        else {
          resultString += input[i]; 
        }
      } 
      return resultString; 
      break;    
  
    case "kebab":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          resultString += "-";
        }
        else {
          resultString += input[i]; 
        }
      } 
      return resultString;
      break; 
  
    case "title":
      for (let i = 0; i < input.length; i++) {
        if (i === 0) {
          resultString += input[i].toUpperCase();
        }
        else if (input[i] === " ") {
          resultString += input[i];
          resultString += input[i + 1].toUpperCase();
          i++;
        }
        else {
          resultString += input[i]; 
       }
     } 
    return resultString; 
       break; 
  
    case "vowel":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
          resultString += input[i].toUpperCase();
        }
        else {
          resultString += input[i]; 
        }
      } 
      return resultString;
      break; 
    
    case "consonant":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
          resultString += input[i];
        }
        else {
          resultString += input[i].toUpperCase(); 
        }
      } 
      return resultString;
      break; 
    
    case "upper":
      resultString += input.toUpperCase();
      return resultString;
       break; 
     
    case "lower":
      resultString += input.toLowerCase();
      return resultString;
      break; 
    
    default:
      return resultString;
  }
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this IS a string", "upper"));
console.log(makeCase("this is a STring", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));


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