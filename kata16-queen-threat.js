//captain's log, naked and afraid coding edition: It's been three days alone in the wilderness and all of my strategies thus far have depleted me of time and energy. I decided to burn the remainder of my code in exhange for the warmth of ideas on the lhl forum. Here is my new way of making the game board, so now I can move on to thinking about play strategy.

// Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
// Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.


let whiteQueen = [1, 1];
let blackQueen = [3, 1];

let generatedBoard = (whiteQueen, blackQueen) => {
  
  let newBoard  = [];
  let squareSize = 8;
  
  for(let i = 0; i < squareSize; i++){
    newBoard [i] = [];
    for(let r = 0; r < squareSize; r++){
      newBoard [i][r] = 0;
    }
  }
  newBoard [whiteQueen[0]][whiteQueen[1]] = 1;
  newBoard [blackQueen[0]][blackQueen[1]] = 1;

  return newBoard;
}

let queenThreat = (generateBoard) => {
//returns true if queens are able to attack, returns false if queens cannot attack from current positions
  board = generateBoard(whiteQueen, blackQueen);
  
  for (let y = 0; y < board.length; y++) {
    // console.log(board[y])
    for (let x = 0; x < board[y].length; x++) {
      // let posCoordinates = [y, x];
      // let positionValue = board[y][x]; 
      // console.log(posCoordinates, positionValue)

      if ((whiteQueen[0] === blackQueen[0]) || (whiteQueen[1] === blackQueen[1])) {
        return true;
      } else {
        if (whiteQueen[0] - blackQueen[0] === whiteQueen[1] - blackQueen[1]) {
          return true; 
        } else {
          return false;
        }
      }
    }
  }
}






console.log(generatedBoard(whiteQueen, blackQueen));
console.log(queenThreat(generatedBoard));



//if x is the same or y is the same, then the threat is true.
//for diagonal lines... 
//queen1 x - queen 2 x is equal to queen1 y - queen2 y
//[3,0] & [6,3] change of 3 ... [0, 7] & [4, 3] change of 4 ... [1,2] & [3,4] change of 2...






//original code to create a blank board as follows: 

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];

// let createEmptyBoard = function (squareSize) {

//   let singleRow = [];
//   let emptyBoard = [];
//   for (r = 0; r < squareSize; r++) {
//     singleRow.push(0);
//     emptyBoard.push(singleRow);
//   }
//   return emptyBoard;
// }

// console.log(createEmptyBoard(8))


// --> I created something unnecessary here, but will keep the code in my comments because I learned somethign from it and my find the process valuable in the future: 


// const boardCoordinateMap = [];

// for (y = 0; y < emptyBoard.length; y++) {
//   let rowOfCoord = [];

//   for (x = 0; x < emptyBoard[0].length; x++) {
//     let posCoordinates = [x, y];
//     rowOfCoord.push(posCoordinates);
//     // let positionValue = emptyBoard[y][x]; 
//   }
//   boardCoordinateMap.push(rowOfCoord);
// }