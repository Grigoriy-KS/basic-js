const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return str;
  let result = '';
  let amount = 1;
  let strChar = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === strChar) {
      amount++;
    } else {
      if (amount === 1) {
        result += strChar;
      } else {
        result += amount + strChar;
      }
      strChar = str[i];
      amount = 1;
    }
  }
  if (amount === 1) {
    result += strChar;
  } else {
    result += amount + strChar;
  }
  return result;
}

module.exports = {
  encodeLine
};
