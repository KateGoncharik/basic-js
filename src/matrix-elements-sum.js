const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function turnMatrix (matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

function getMatrixElementsSum(matrix) {
    let newMatrix = turnMatrix(matrix);
    let result = 0;
    for (let i =0; i < newMatrix.length; i++) {
      for (let j = 0; j < newMatrix[i].length; j++) {
        if (newMatrix[i][j] === 0) {
          break;
        }
        result += newMatrix[i][j];
  
      }
    }
    return result;
  }
  

module.exports = {
  getMatrixElementsSum
};
