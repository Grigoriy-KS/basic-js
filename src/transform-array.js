const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const resultArray = Object.assign([], arr);
  for (let i = 0; i < arr.length; i++) {
    switch (resultArray[i]){
      case '--discard-next':
        if (i + 1 < arr.length) {
          resultArray[i + 1] = '--discard-next';
          i++;
        } else {
          continue;
        }
        break;
      case '--discard-prev':
        if (i - 1 >= 0) {
          resultArray[i - 1] = '--discard-prev';
        } else {
          continue;
        }
        break;
      case '--double-next':
        if (i + 1 < arr.length) {
          resultArray[i] = resultArray[i + 1];
        } else {
          continue;
        }
        break;
      case '--double-prev':
        if (i - 1 >= 0) {
          resultArray[i] = resultArray[i - 1];
        } else {
          continue;
        }
        break;
    }
  }
  return resultArray.filter((item) => item !== '--discard-next').filter((item) => item !== '--discard-prev').filter((item) => item !== '--double-next').filter((item) => item !== '--double-prev');
}

module.exports = {
  transform
};
