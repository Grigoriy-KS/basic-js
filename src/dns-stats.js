const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const reverseDomainsArray = domains.map(function(item) {
    return item.split('.').reverse();
  });
  const reverseDomains = domains.map(function(item) {
    return '.' + item.split('.').reverse().join('.');
  });
  const levelDomainNamesArray = [];
  for (let i = 0; i < reverseDomainsArray.length; i++) {
    if (!levelDomainNamesArray.includes(reverseDomainsArray[i][0])) levelDomainNamesArray.push('.' + reverseDomainsArray[i][0]);
  }
  for (let i = 0; i < reverseDomainsArray.length; i++) {
    if (typeof(reverseDomainsArray[i][1]) === 'undefined' || reverseDomainsArray[i][1] === null) continue;
    if (!levelDomainNamesArray.includes('.' + reverseDomainsArray[i][0] + '.' + reverseDomainsArray[i][1])) levelDomainNamesArray.push('.' + reverseDomainsArray[i][0] + '.' + reverseDomainsArray[i][1]);
  }
  for (let i = 0; i < reverseDomainsArray.length; i++) {
    if (typeof(reverseDomainsArray[i][2]) === 'undefined' || reverseDomainsArray[i][2] === null) continue;
    if (!levelDomainNamesArray.includes('.' + reverseDomainsArray[i][0] + '.' + reverseDomainsArray[i][1] + '.' + reverseDomainsArray[i][2])) levelDomainNamesArray.push('.' + reverseDomainsArray[i][0] + '.' + reverseDomainsArray[i][1] + '.' + reverseDomainsArray[i][2]);
  }
  const result = {};
  for (let i = 0; i < levelDomainNamesArray.length; i++) {
    let amount = 0;
    for (let j = 0; j < reverseDomains.length; j++) {
      if (reverseDomains[j].includes(levelDomainNamesArray[i])) amount++;
    }
    result[levelDomainNamesArray[i]] = amount;
  }
  return result;
}

module.exports = {
  getDNSStats
};
