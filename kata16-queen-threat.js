



let squareSize = 8; 
let singleRow = [];
let emptyBoard = [];
for (r = 0; r < squareSize; r++) {
  singleRow.push(0);
  emptyBoard.push(singleRow);  
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
  // let ex = [];
const boardCoordinateMap = []; 

for (y = 0; y < emptyBoard.length; y++) {
    // coordOne = y;
    // console.log(y);
  // boardCoordinateMap.push([coordOne,]);
  for (x = 0; x < emptyBoard.length; x++) {
    // coordTwo = x;
    // console.log(coordTwo + '-')
    let positionValue = emptyBoard[y][x]; 
    let posCoordinates = [x, y]; 
    // console.log(posCoordinates);
    boardCoordinateMap.push(posCoordinates); 

  }
  
}
  // console.log(boardCoordinateMap)
  // console.log(ex)