// In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

// Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

// {
//   CourseName: [instructors]
// } 


const organizeInstructors = function(instructors) {
  let instructorsByCourse = {};
  let instructorsArray = []; 

  for (let i = 0; i < instructors.length; i++) {
    console.log(instructors[i]) 
    let instructorObj = instructors[i];

  }

};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

// Expected Output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }

// I need to put all names of instructors who teach the same course into an Array. 
// then, I need to add those names into  an object where the key is the course name and value is/are the instructor(s)