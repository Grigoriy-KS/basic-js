const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringNumber = n.toString(10);
  let max = n % 10;
  let tempStringNumber = '';
  const stringNumberLength = stringNumber.length;
  for (let i = 0; i < stringNumberLength; i++) {
    tempStringNumber = '';
    for (let j = 0; j < stringNumberLength; j++) {
      if (i === j) continue;
      tempStringNumber += stringNumber[j];
    }
    const tempNumber = Number(tempStringNumber);
    if (tempNumber > max) max = tempNumber;
  }
  return max;
}

module.exports = {
  deleteDigit
};
