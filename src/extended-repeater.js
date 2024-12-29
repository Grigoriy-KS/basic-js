const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {separator: '+', additionSeparator: '|'}) {
  let tempStr;
  if (typeof str === 'string') {
    tempStr = str;
  } else {
    tempStr = String(str);
  }
  
  if (typeof options.addition === 'undefined') options.addition = '';

  if (typeof options.addition !== 'string') options.addition = String(options.addition);
  
  if (typeof options.repeatTimes === 'undefined' || options.repeatTimes === null || Number.isFinite(options.repeatTimes) === false) options.repeatTimes = 1;
  
  if (typeof options.additionRepeatTimes === 'undefined' || options.additionRepeatTimes === null || Number.isFinite(options.additionRepeatTimes) === false) options.additionRepeatTimes = 1;
  
  if (typeof options.separator === 'undefined' || options.separator === null) options.separator = '+';
  
  if (typeof options.additionSeparator === 'undefined' || options.additionSeparator === null) options.additionSeparator = '|';

  function smallRepeater (str, repeatTimes, separator) {
    const tempArray = [];
    for (let i = 0; i < repeatTimes; i++) {
      tempArray.push(str);
    }
    return tempArray.join(separator);
  }

  return smallRepeater(tempStr + smallRepeater(options.addition, options.additionRepeatTimes, options.additionSeparator), options.repeatTimes, options.separator);
}

module.exports = {
  repeater
};
