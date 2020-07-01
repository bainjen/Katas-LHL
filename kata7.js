//implement a function called checkAir() w/ 2 arguments --> (an array of strings, a number). The array of srings represents clean or dirty air samples. The number is the threshold  of acceptable dirty samples. The function will return either DIRTY or POLLUTED

//can use a counter ++ to track dirty and clean samples withing a loop and examine whethere it excedes the dirty threshold. 

const checkAir = function (samples, threshold) {
  let counter = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      counter++; 
    }
  }
  return counter / 10 <= threshold ? 'Clean' : 'Polluted';
  // console.log(counter); 
  // console.log(counter / 10); 
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

// EXPECTED OUTPUT
// Polluted
// Polluted
// Clean