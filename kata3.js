// counting num of vowels in given string [a,e,i,o,u]

// ideas: add vowels to an array, convert string to an    array, use a counter to loop through and compare both arrays


const numberOfVowels = function(data) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let stringArray = data.split("");
  let counter = 0;
  for (let i = 0; i < stringArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (stringArray[i] === vowels[j]) {
        counter++;
      }
    }
  }
  return counter; 
};

//input
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
// Expected Output
// 3
// 5
// 5