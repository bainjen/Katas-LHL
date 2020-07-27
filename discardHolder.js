// In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

// A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

// In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

// Would be represented in JavaScript like this:

// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]

// Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

// Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
// Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// // // let generatedBoard = generateBoard(whiteQueen, blackQueen);
// // // console.log(generatedBoard);
// // // console.log(queenThreat(generatedBoard));

// const generatedBoard = function (whiteQueen, blackQueen) {
//   let emptyBoard = [
//     [8, 0, 0, 0, 0, 0, 0, 2],
//     [9, 0, 0, 0, 0, 0, 0, 3],
//     [6, 0, 0, 0, 0, 0, 0, 5],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 98]
//   ];

//    for (let y = 0; y < emptyBoard.length; y++) {
//               // console.log(emptyBoard[y]);
//       for (x = 0; x < emptyBoard.length; x++) {
//         let positions = emptyBoard[y][x]; 
//         let posCoordinates = [x, y]; 
//         emptyBoard += posCoordinates;
        
//          }
//     }
// console.log(emptyBoard)
// }

// console.log(generatedBoard(whiteQueen, [3,4]));

// let x = 10;
// let y = 9;
// let practice = function (x, y) {
//   let result = x + 7 - y; 
//   return result;
// }
// console.log(practice(7,9))
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false


// let board = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]


// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = function (whiteQueen, blackQueen) {

//   let board =
//     [
//       [1, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0]
//     ];
//   for (let i = 0; i < board.length; i++) {
//     for (let y = 0; y < board[i].length; y++) {
//       console.log(board[i][y]);
//     }
//   }

// }

//NOTES
//This got me somewhere, but not where I wanted to be. It did help me to understand the x and y axis better

// const generatedBoard = function (whiteQueen, blackQueen) {
//   let emptyBoard =  [
//       [8, 0, 0, 0, 0, 0, 0, 2],
//       [9, 0, 0, 0, 0, 0, 0, 3],
//       [6, 0, 0, 0, 0, 0, 0, 5],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 98]
//   ]
//   // console.log(emptyBoard);
//   // console.log(whiteQueen, blackQueen)

//   for (y = 0; y < emptyBoard.length; y++) {
//     // console.log(emptyBoard[y]);
//     for (x = 0; x < emptyBoard.length; x++) {
//       let positionsX = emptyBoard[y][x]; 
//       let positionsY = emptyBoard[x][y];
//       // console.log(emptyBoard.indexOf(5));
//       console.log([positionsX, positionsY])

//     }
//   }
// }

// console.log(generatedBoard(whiteQueen, [3,4]));

//thought this was a step closer than the above but now it also seems like a dead end...

// for (y = 0; y < emptyBoard.length; y++) {
//   // console.log(emptyBoard[y]);
//   for (x = 0; x < emptyBoard.length; x++) {

//     let positions = emptyBoard[y][x]; 
//     let posCoordinates = [x, y]; 
//     console.log(posCoordinates);


//   }
// }

// let emptyBoard = [];
// let squareSize = 8;

// for (var i = 0; i < times; i++) {
//   board[i] = [];
//   for (j = 0; j < times; j++) {
//     board[i][j] = 0;
//   }

// }




// let emptyBoard = [
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 8, 9]
// ];

// let board = [];


// let boardCoordinatesMap = [];

// // for (y = 0; y < emptyBoard.length; y++) {
// //   let newRow = emptyBoard[y];
// //     for (x = 0; x < emptyBoard.length; x++) {
// //       let positions = emptyBoard[y][x]; 
// //       let posCoordinates = [x, y]; 
// //       // board = posCoordinates;
// //       // console.log(positions);
// //       // console.log(posCoordinates)
// //      newRow += posCoordinates;
// //       boardCoordinatesMap.push(newRow);
// //       // if (blackQueen === posCoordinates) {
// //       //   positions = 1;
// //       // }
  
// //     }
  
// //   }
// //   console.log(emptyBoard);
// // console.log(boardCoordinatesMap)
// // console.log(emptyBoard, boardCoordinatesMap); 

// let example = [];
// for (let i = 0; i < 8; i++) {
//   // let row = example.push(0);
//   // console.log(row)
//   console.log(i)
//   // for (let j = 0; j < 8; j++) {
//   //    row++
//   // }
 
// } 
// console.log(example); 

// var ary = new Uint8Array(10); 
// console.log(ary);

// let emptyboard = [];
// let squareNum = 8;
// let rowHolder = new Uint8Array(squareNum); 
// console.log(rowHolder);

// for (let i = 0; i < squareNum; i++) {
//   emptyboard.push(rowHolder);
// }

// console.log(emptyboard);

// let queen1 = [2, 5];
// let queen2 = [0, 0];

// let chessboard = [];
// let times = 8;
// for(let i = 0; i < times; i++){
// chessboard[i] = [];
// for(let n = 0; n < times; n++){
// chessboard[i][n] = 0;
// };
// };
// chessboard[queen1[0]][queen1[1]] = 1;
// chessboard[queen2[0]][queen2[1]] = 1;
// console.log(chessboard);




let whiteQueen = [2, 5];
let blackQueen = [0, 0];

let board = [];
let squareSize = 8;
for(let i = 0; i < squareSize; i++){
  board[i] = [];
  for(let r = 0; r < squareSize; r++){
    board[i][r] = 0;
  };
};

board[whiteQueen[0]][whiteQueen[1]] = 1;
board[blackQueen[0]][blackQueen[1]] = 1;
console.log(board)


// let whiteQueen = [2, 5];
// let blackQueen = [0, 0];

// let board = [];
// let squareSize = 8;
// for(let i = 0; i < squareSize; i++){
//   let row = board[i]
//   row = [];
//   for(let r = 0; r < squareSize; r++){
//     board[i][r] = 0;
//   };
// };

// board[whiteQueen[0]][whiteQueen[1]] = 1;
// board[blackQueen[0]][blackQueen[1]] = 1;
// console.log(board)


///iteration day three of discarded code scraps SUNDAY edition 




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

// console.log(createEmptyBoard(8)[1])

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