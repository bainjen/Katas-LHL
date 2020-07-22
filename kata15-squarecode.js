// Square Code
// In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

//     ifmanwas
//     meanttos
//     tayonthe
//     groundgo
//     dwouldha
//     vegivenu
//     sroots
// The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.
    // ifmanwas
    // meanttos
    // tayonthe
    // groundgo
    // dwouldha
    // vegivenu
    // sroots
// Create a function named squareCode that will receive a message, and return the secret square code version of the message.


const squareCode = function(message) {
  // draftingArr = []
  // message.split(" ").join(' ');
  // message.replace(/" "/g, "")
  let spacelessMess = message.replace(/\s+/g, '');
  let length = spacelessMess.length;
  let sqRoot = Math.ceil(Math.sqrt(length));
  console.log(sqRoot)
  // spacelessMess = spacelessMess.split('');
  for (let i = 0; i < spacelessMess.length; i++) {
    // console.log(spacelessMess[i])
    console.log(i)
    if ([i+1] % sqRoot === 0) {
      console.log('right here!')
      // spacelessMess[i] += "\n"; 
    }
  
  }
  console.log(spacelessMess)

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

// Expected Output
// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau


//note to self on Wed afternoon so I don't forget:  i need to figure out how to deal with the remainder when the number doesn't make a perfect square. This is a problem
// vagrant [katas]> node kata15-squarecode.js 
// 3
// 0
// 1
// 2
// right here!
// 3
// 4
// 5
// right here!
// 6
// 7
// chillout
// undefined
// 4
// 0
// 1
// 2
// 3
// right here!
// 4
// 5
// 6
// 7
// right here!
// 8
// 9
// feedthedog
// undefined
// 4
// 0
// 1
// 2
// 3
// right here!
// 4
// 5
// 6
// 7
// right here!
// 8
// 9
// 10
// 11
// right here!
// haveaniceday
// undefined
// 8
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// right here!
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// right here!
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// right here!
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// right here!
// 32
// 33
// 34
// 35
// 36
// 37
// 38
// 39
// right here!
// 40
// 41
// 42
// 43
// 44
// 45
// 46
// 47
// right here!
// 48
// 49
// 50
// 51
// 52
// 53
// ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots
// undefined


