const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = structuredClone(matrix);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      resultMatrix[i][j] = 0;
      matrix[i - 1] && (matrix[i - 1][j - 1]) && (resultMatrix[i][j] += 1);
      matrix[i - 1] && (matrix[i - 1][j + 0]) && (resultMatrix[i][j] += 1);
      matrix[i - 1] && (matrix[i - 1][j + 1]) && (resultMatrix[i][j] += 1);
      matrix[i + 0] && (matrix[i + 0][j + 1]) && (resultMatrix[i][j] += 1);
      matrix[i + 1] && (matrix[i + 1][j + 1]) && (resultMatrix[i][j] += 1);
      matrix[i + 1] && (matrix[i + 1][j + 0]) && (resultMatrix[i][j] += 1);
      matrix[i + 1] && (matrix[i + 1][j - 1]) && (resultMatrix[i][j] += 1);
      matrix[i + 0] && (matrix[i + 0][j - 1]) && (resultMatrix[i][j] += 1);
    }
  }
  console.log(matrix);
  return resultMatrix;
}

module.exports = {
  minesweeper
};
