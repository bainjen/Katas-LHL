//We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

//Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

// Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

// camel, pascal, snake, kebab, title
// vowel, consonant
// upper, lower

// Our function should be able to handle all of these cases.

const makeCase = function(input, caseType) {

  switch (caseType) {
    
    case "camel":
      console.log('hi');  
      break; 
    
    case "pascal":
      console.log('hi');  
       break; 
     
    case "snake":
      console.log('hi');  
      break;    
  
    case "kebab":
      console.log('hi');  
      break; 
  
    case "title":
      console.log('hi');  
       break; 
  
    case "vowel":
      console.log('hi');  
      break; 
    
    case "consonant":
      console.log('hi');  
      break; 
    
    case "upper":
      console.log('hi');  
       break; 
     
    case "lower":
      console.log('hi');  
      break; 
    
    default: 
      console.log('hi')
  }

}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
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

