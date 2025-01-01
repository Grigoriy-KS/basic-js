const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexArray = arr.map((item) => item === -1);
  const sortedArray = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  const resultArray = [];
  let indexOfSortedArray = 0;
  for (let item = 0; item < indexArray.length; item++) {
    if (indexArray[item]) {
      resultArray[item] = -1;
    } else {
      resultArray[item] = sortedArray[indexOfSortedArray];
      indexOfSortedArray++;
    }
  }
  return resultArray;
}

module.exports = {
  sortByHeight
};
