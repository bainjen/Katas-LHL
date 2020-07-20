
const organizeInstructors = (instructors) => {
  let uniqCourseArray = [];
  let finalObj = {};

  for (let i = 0; i < instructors.length; i++){
    
    const currentInstructorItem = instructors[i]
    const courseName = currentInstructorItem.course;
    const instructorName = currentInstructorItem.name;

    if (finalObj[courseName] === undefined) {
      finalObj[courseName] = [];
    }
    finalObj[courseName].push(instructorName)
    
  }

  return finalObj;
}

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));