


let whiteQueen = [0, 0];
let blackQueen = [5, 7];

let createEmptyBoard = function (squareSize) {

  let singleRow = [];
  let emptyBoard = [];
  for (r = 0; r < squareSize; r++) {
    singleRow.push(0);
    emptyBoard.push(singleRow);
  }
  return emptyBoard;
}

console.log(createEmptyBoard(8))

console.log(createEmptyBoard(8)[1])

//this function takes in a number which is the square size of the board and returns and emopty board filled with zeros. 


  
// let generatedBoard = generateBoard(whiteQueen, blackQueen);

// for (let i = 0; i < createEmptyBoard(8).length; i++) {
//   let rows = createEmptyBoard(8)[i]; 
//   if(blackQueen[0] === )
//   for (let j = 0; j < rows.length; j++) {
//     console.log(rows[j])
//   }
// }



//create a function called queenThreat 


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