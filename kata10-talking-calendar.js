// Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.

// We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.



const talkingCalendar = function (date) {
  let readableDate = ""
  let year = date[0] + date[1] + date[2] + date[3]; 
  let month = Number(date[5] + date[6]);
  let day = date[8] + date[9];

  switch (month) {
    case 01:
      month = 'January';
      break;
    case 02:
      month = "February";
      break;
    case 03:
      month = "March";
      break;
    case 04:
      month = 'April';
      break;
    case 05:
      month = "May";
      break;
    case 06:
      month = "June";
      break;
    case 07:
      month = 'July';
      break;
    case 08:
      month = "August";
      break;
    case 09:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
    default: false;

  } 
  
  if (day[0] == 0) {
    day = day[1];
  }
    
  if (day == 1 || day == 21 || day == 31) {
    day += 'st';
  }
  else if (day == 2 || day == 22) {
    day += 'nd';
  }
  else if (day == 3 || day == 23) {
    day += 'rd';
  } else {
    day += 'th';
  }
  

  readableDate += month + ' ';
  readableDate += day + ', ';
  readableDate += year;
 
  return readableDate;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


// Output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987

//I want to convert each element of a string to a new string. so I should open up an empty string variable that I will return at the end. I can use string += to add to it. 
//At some point, I need to add suffixes to the days with an if statement (st, nd, rd, th)
//use an array or an object to list the written months I would want to return 

//get month method
//var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];

//1st, 21, 31
  //2nd, 22
  //3rd, 23
  //4th, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30, 

// console.log(monthNames[month + 1 ])
  

  // for (let i = 0; i < monthNames.length; i++) {
 
  //   monthIndex = monthNames.indexOf(monthNames[i]);
  //   month = monthIndex + 1; 
  //   console.log(month);

  //   }
    // indMonthArr = monthNames[i]; 
    // if (month === indMonthArr[0]); {
    //   console.log()
    // }
  // }

   // const monthNames = [{ 1: 'January' }, { 2: 'February' }, { 3: 'March' }, { 4: 'April' }, { 5: 'May' }, { 6: 'June' }, { 7: 'July' }, { 8: 'August' }, { 9: 'September' }, { 10: 'October' }, { 11: 'November' }, { 12: 'December' }];


  // const monthNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // const monthNames = [['1', 'January'], ['2', 'February'], ['3', 'March'], ['4', 'April'], ['5', 'May'], ['6', 'June'], ['7', 'July'], ['8', 'August'], ['9', 'September'], ['10', 'October'], ['11', 'November'], ['12', 'December' ]];

  // const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
