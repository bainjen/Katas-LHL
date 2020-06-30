//given string of words -> turn into percent encoded string by replacing white space with %20

// INSTRUCTIONS
// Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

// Use some sort of looping. Do Not use String.prototype.replace

const urlEncode = function (text) {
  let replacement = "%20"
  let newString = [];
  for (let i = 0; i < text.length; i++) {
    let character = text[i];
    if (character === " ") {
      newString.push(replacement);
    } else {
      newString.push(character); 
    }
  }
  console.log(newString);
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

//EXPECTED OUTCOME 
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure

// INITIAL IDEAS:
// could convert the string to an array and loop through to see if the index is equal to a blank space then remove that character and add in %20. Then convert the array back into a string. 