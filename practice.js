

// const instructorWithLongestName = function (instructors) {
//   // let longestName = { name: "", course: "" };
//   let longestName = instructors[0]; 
//   for (let i = 0; i < instructors.length; i++) {
//     // console.log(instructors[i]);
//     // console.log(instructors[i]['name'].length);
//     // console.log(longestName['name'].length);
//     // let iLength = instructors[i]['name'].length;

//     if (instructors[i]['name'].length > longestName.length) {
//       longestName = instructors[i]; 
//       console.log(longestName);
//     }
//   }
// };

const instructorWithLongestName = function(instructors){
  let longestName = instructors[0].name // initiate the first object that will be passed in and this will hold the longest length of a name
  let indexOfLongestName = 0; // holds the index of the longest name in the array
   
   for(let i = 0; i < instructors.length; i++){ // loop through the array of objects
  
 
     if (instructors[i].name.length > longestName.length){ // create a conditional that tests if each name is longer than longestName

     longestName = instructors[i].name; // longestName contains the longest name
    indexOfLongestName = i;

   }
   
   }
   return instructors[indexOfLongestName];
 };
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
  {name: "Ophilialalalla", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "Davidstellar", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "SamuelAdamaIII", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew O'Brien", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));