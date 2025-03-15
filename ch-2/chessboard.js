/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

const gridSize = 8;
let board = "";

for (let row = 0; row < gridSize; row++) {
  for (let col = 0; col < gridSize; col++) {
    board += (row + col) % 2 === 0 ? " " : "#";
  }
  board += "\n";
}

console.log(board);
