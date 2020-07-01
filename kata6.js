//INSTRUCTIONS
//write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot

// DETAILS
// There are three kinds of possible vehicles: regular cars, small cars,  and motorcycles.
// Regular cars can only park in R spots.
// Small cars can park in R or S spots.
// Motorcycles can park in R, S, or M spots.


//An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.
//Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.

//NOTE 
//Note: There may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.

//IDEAS -- variable to hold parking spot -- loop through a loop to get x and y axis -- if vehicle === "" && spots === "" then let array [X, Y] = coordinates found in loop 

const whereCanIPark = function (spots, vehicle) {
  
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots.length; x++) {

      let spot = spots[y][x]; 
      let goodParkingSpot = [x, y]; 

      if (vehicle === 'regular') {
        if (spot === 'R') {
          return goodParkingSpot; 
        }

      } else if (vehicle === 'small') {
          if (vehicle === 'S' || vehicle === 'R') {
            return goodParkingSpot;
          }
        
      } else if (vehicle === 'motorcycle') {
         if (spot === 'M' || spot === 'S' || spot === 'R') {
          return goodParkingSpot; 
         } 
        }
      }
  }
  return false; 
  }


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

//EXPECTED OUTPUT 
//[4, 0]
//false
//  [3, 1]



//ABANDONED ROUTE

// const whereCanIPark = function (spots, vehicle) {
//   let goodParkingSpot = [];
//   for (let x = 0; x < spots.length; x++)
//   {
//     // console.log(spots[x]); 
//     // console.log(8+9)

//     for (let y = 0; y < spots.length; y++)
//       // console.log(spots[y]);
//       if (spots[x][y] === 'R' && vehicle === 'regular') {
//         console.log(spots[x][y]);
//         let row = spots[x].indexOf();
//         let column = spots.indexOf(spots[y]); 
//         goodParkingSpot.push(row);
//         console.log(goodParkingSpot)
//       }
    
//     }

// };