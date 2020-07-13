// In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

// Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

// {
//   CourseName: [instructors]
// } 


const organizeInstructors = function(instructors) {
  let instructorsByCourse = {};
  let instructorsArray = []; 


  for (let i = 0; i < instructors.length; i++) {

    let instructorObj = instructors[i];
    let courseName = instructorObj.course;
    let instructorName = instructorObj.name; 
    let newName = "";
    // console.log(instructorObj, "hi!")
 

    for (let y = 0; y < instructorObj.length; y++){
      // console.log(instructorObj[y], "HELLO");
      if (newName != instructorName) {
        instructorsArray.push(instructorName)
      }
    }
 
  }
  instructorsArray.push('Jen');
  console.log(instructorsArray)

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

// if two instructors have the same course, we need to push their name to an array


// Hey! I just completed this Kata and I think I can help. What I did was to write two very short for loops with a single instruction line in each. In the first loop I defined properties to the object using Object[property] format. This object properties have empty arrays as values. So they look like this: Object[property] = [] The properties were named after courses, so for the first list you get has two properties and three for the second one.

// In the second for loop, I pushed instructor names in these arrays according to what they teach. So my instruction line in the loop looks like output[“course name”].push(“instructor name”). Since the instructors come already paired to the course they teach, the i on both sides of this command have the same value and the command pushes the instructors to the correct property.


// if (instructorName.courseName)
// instructorsArray.push(instructorName)
// console.log(instructorsArray)
// // for (let y = 0; y < instructors.length; y++) {
// //   instructorsArray.push(instructorName)
// //   console.log(instructorsArray)

// // // }

// courseName = instructorName.course 
// console.log(courseName)