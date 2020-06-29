//INITIAL THOUGHTS 
//given a list of names and must determine the longest
//I see we are taking in an array of objects as our parameters and should return the contents of the correct object. 
//we need to access the value of the 'name' keys within each object and compare their lengths. 
//could try to use string.length 

//INSTRUCTIONS: 
//Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

// const instructorWithLongestName = function(instructors) {
//   // Put your solution here
//   let biggestNum = instructors[0].name.length; 
//   for (let i = 0; i < instructors.length; i++) {
//     let nameLength = instructors[i]['name'].length;
//     let instructorName = instructors[i]['name']
//     let instructorObj = instructors[i]; 
//     if (nameLength > biggestNum) {
//       biggestNum = nameLength;
//       if (biggestNum = nameLength) {
//         console.log(instructors[i]);
//     }

//       // console.log(nameLength);
//       // console.log(biggestNum);
//       // console.log(instructorName);
//       // console.log(instructorObj); 
//     }

//   }
//   // console.log(biggestNum);

// };


// if (biggestName = nameLength) {
//   let solution = instructorObj;
//   console.log(solution); 
// } else {
//   let solution = intructors[0];
//   console.log(solution); 
// }

const instructorWithLongestName = function(instructors) {

  let biggestName = instructors[0]['name']; 
  let bigNameIndex = 0; 

  for (let i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i]['name'].length;

    if (nameLength > biggestName.length) {
      biggestName = instructors[i]['name'];
      bigNameIndex = i; 
    }
  }
  return instructors[bigNameIndex]; 
}

//INPUT
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophiliannahhh", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "Davidangelo", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

//EXPECTED OUTPUT 
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}



// let test =
//   [
//   {name: "Samuel", course: "iOS"},
//   {name: "Jeremiah", course: "Web"},
//   {name: "Ophilia", course: "Web"},
//   {name: "Donald", course: "Web"}
//   ]

// console.log(test[3]);

// let newArr = [];

// for (let i = 0; i < test.length; i++) {

  // console.log(test[i]['name']);
  //^^^this will print out each name only 
  // let length = test[i]['name'].length;
  // console.log(length);
  // newArr.push(test[i]['name'].length);
  // console.log(newArr);
  //^^^gives me an array of lengths

  //^^this will print out the number of characters in the string

  // newArr.push(test[i]['name'])
  // newArr.push(length);
  // console.log(newArr);
  //}

 



