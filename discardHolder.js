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
