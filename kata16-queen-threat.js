



let squareSize = 8; 
let singleRow = [];
let emptyBoard = [];
for (r = 0; r < squareSize; r++) {
  singleRow.push(0);
  emptyBoard.push(singleRow);  
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
const boardCoordinateMap = []; 

for (y = 0; y < emptyBoard.length; y++) {
  let rowOfCoord = [];

  for (x = 0; x < emptyBoard[0].length; x++) {
    let posCoordinates = [x, y]; 
    rowOfCoord.push(posCoordinates);
    // let positionValue = emptyBoard[y][x]; 
  }
  boardCoordinateMap.push(rowOfCoord);
}
  // console.log(emptyBoard)
  console.log(boardCoordinateMap)