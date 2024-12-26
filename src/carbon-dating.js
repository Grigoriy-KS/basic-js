const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (arguments.length === 0) return false;
  if (typeof sampleActivity !== 'string') return false;
  const sampleActivityNumber = parseFloat(sampleActivity); 
  if (isFinite(sampleActivityNumber) === false) return false;
  if (sampleActivityNumber <= 0 || sampleActivityNumber > 15) return false;
  const k = Math.LN2 / HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);
  return t;
}

module.exports = {
  dateSample
};
