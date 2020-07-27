// The taxi driver is given a list of directions that tell her whether to turn left or right, and how many blocks to drive for.Every time the taxi driver has to turn left, she will make a 90° turn anticlockwise, and every time the taxi driver has to turn right, she will make a 90° turn clockwise.

// Create a function named blocksAway that will receive an array of directions, and return an object that calculates how far north and east those directions will take someone.

// The taxi driver will always start at the same position, in the most south west position on the grid. This means that the output will only need to specify an east and north position, since the taxi driver can only end up in these East and North of the starting point.


const blocksAway = function(directions) {
  let routeDistance = {east: 0, north: 0};
  let eastCounter = 0;
  let northCounter = 0;
  let directionFacing = '';

  if (directions[0] === 'right') {
    directionFacing = 'east';
    eastCounter += directions[1];
  } else if (directions[0] === 'left') {
    directionFacing = 'north';
    northCounter += directions[1];
  } else {
    return 'I am lost.'
  }


  for (let i = 2; i < directions.length; i += 2) {
    
    if (directions[i] === 'right') {

      if (directionFacing === 'east') {
        directionFacing = 'south';
        northCounter -= directions[i + 1];
      }
      else if (directionFacing === 'north') {
        directionFacing = 'east';
        eastCounter += directions[i + 1];
      }
      else if (directionFacing === 'south') {
        directionFacing = 'west';
        eastCounter -= directions[i + 1];
      }
      else if (directionFacing === 'west') {
        directionFacing = 'north';
        northCounter += directions[i + 1];
      }


    } else if (directions[i] === 'left') {

      if (directionFacing === 'north') {
        directionFacing = 'west';
        eastCounter -= directions[i + 1];
      }
      else if (directionFacing === 'east') {
        directionFacing = 'north';
        northCounter += directions[i + 1];
      }
      else if (directionFacing === 'south') {
        directionFacing = 'east';
        eastCounter += directions[i + 1];
      }
      else if (directionFacing === 'west') {
        directionFacing = 'south';
        northCounter -= directions[i + 1];
      }
      else {
        return 'I am lost.'
      }
    }
  }
  
  routeDistance.east = eastCounter;
  routeDistance.north = northCounter;
  return routeDistance;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


// Expected Output
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}

//My Notes:
//taking in an array, but returning an object 
//first move will always be left/right
//second move will always be up/down
//can I simply add and subtract every other number to track change on the x/y axis? Myabe not...how to track positive/negative integers when left/right means 
//LEFT is either always up or left and RIGHT is always either right or down
//taxi always starts at same place, so we will call this center: [0,0] --> only positive integers allowed like working in upper right quadrent of a graph. 
//need a direction varbiable for the way taxi is pointing to keep track of relative direction 
//to begin: if right -- facing east and if left -- facing north 
//if facing east: right means down and left means up
//if facing north: right means right and left means left
//if facing west: right means up and left means down
//if facing south: right means left and left means right 
// given a coordinate [east, north]---> we can add and subtract based on direction  using a counter 

//started trying this out...

// for (let i = 0; i < directions.length; i+=2) {
//   // console.log(directions[i])
//   let directionFacing = 'north';
//   if (directions[i] === 'right' && directionFacing === 'north') {
//     eastCounter += directions[i] + 1
//   } else if (directions[i] === 'left' && directionFacing === 'east') {
//     northCounter += directions[i] + 1
//   } else {
//     console.log("still working on it")
//   }
// }
// console.log(eastCounter, northCounter)
// };

//tried some things... I think I should play through two separate if statements depending on whether the first move is left of right 

//I have this...
// for (let i = 0; i < directions.length; i+=2) {
//   if (directions[i] === 'right') {
//     console.log("I am right!");
//     directionFacing = 'east';
//     eastCounter += directions[i + 1]; 

//   } else if (directions[i] === 'left') {
//     console.log("I am left!");
//     directionFacing = 'north';
//     northCounter += directions[i + 1];
//   } else {
//     console.log ('I am lost.')
//   }
// }

//but what if I start with directions[0] first and THEN do separate for loops? --> will do this


// const blocksAway = function(directions) {
//   let taxiCoord = [0, 0];
//   let eastCounter = 0;
//   let northCounter = 0;
//   let directionFacing = '';

//   if (directions[0] === 'right') {
//     directionFacing = 'east';
//     eastCounter += directions[1];
//   } else if (directions[0] === 'left') {
//     directionFacing = 'north';
//     northCounter += directions[1];
//   } else {
//     return 'I am lost.'
//   }

  
//   for (let i = 2; i < directions.length; i += 2) {
//     console.log(directions[i])
//     if (directions[i] === 'right') {
//       if (directionFacing === '')
//     }
//       }
  

//   console.log(directionFacing, eastCounter, northCounter)
// };

//let's think of possible combinations --> directionFacing  = N/S/E/W and directions[i] = L/R

// N + L => facing west / subtact from eastCounter;
// N + R => facing east / add to eastCounter;
// E + L => facing north / add to northCounter;
// E + R => facing south / subtract from northCounter;
// S + L => facing east / add to eastCounter; 
// S + R => facing west / subtract from eastCounter;
// W + L => facing south / subtract from northCounter; 
// W + R => facing north / add to northCounter;