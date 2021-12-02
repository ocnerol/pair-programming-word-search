/*
// this will ensure horizontal search works properly
 return false after both horizontal search and vertical search

//another case: letters is empty at beginning
// if statement at beginning that checks if letters is an empty array
// if true, return false

// vertical search:
// call transpose on our letters, store that in a variable
// horizontally join transposed array
// conduct same search using for loop as we did for horizontal search
// return true if a given row includes our given word argument

at very end return false (search failure)
*/
// const transpose = require('/vagrant/w2/d2/transpose'); // REMOVED FOR SUBMISSION PURPOSES AND PASTED TRANSPOSE FN WITHIN CURRENT FILE

const transpose = function(matrix) {
  /*

  Initialize the result matrix as an empty array
  Iterate in the given matrix length using nested for loop
  Outer loop will iterate in the rows of the given matrix
  Inner loop will iterate in the columns of the given matrix - will reference to the length of the row
  If statement in the inner loop = if row is equal to 0 - push the given matrix [row][col] into the result matrix as an array
  else:
  push the value in matrix at matrix[row][col] into newMatrix[col]
  return result matrix
  
  */

  let newMatrix = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (row === 0) {
        newMatrix.push([matrix[row][column]]);
      } else {
        newMatrix[column].push(matrix[row][column]);
      }
    }
  }

  return newMatrix;

};


const wordSearch = (letters, word) => {


    const horizontalJoin = letters.map(ls => ls.join('')) // joins letters in each row into a string
    // horizontal search:
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const transposedArr = transpose(letters)
    const horizontalJoin2 = transposedArr.map(ls => ls.join(""))
    // vertical search:
    for (v of horizontalJoin2) {
        if (v.includes(word)) return true
    }

    return false
}

module.exports = wordSearch

// for visualization

// console.log(wordSearch([
//     ['d', 'o', 'g'],
//     ['c', 'a', 't'],
//     ['r', 'a', 't']
// ]))