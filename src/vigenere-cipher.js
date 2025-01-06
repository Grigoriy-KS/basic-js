const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    if (typeof(isDirect) === 'undefined') {
      this.isDirect = true;
    } else {
      this.isDirect = isDirect;
    }
  }
  encrypt(message, key) {
    if (typeof(message) === 'undefined' || typeof(key) === 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    let i = 0;
    const resultArray = message.toUpperCase().split('').map(function(item) {
      let result = item;
      if (item >= 'A' && item <= 'Z') {
        if (i >= key.length) i = 0;
        const alphabetLength = 'Z'.codePointAt() - 'A'.codePointAt() + 1;
        const shift = key.toUpperCase().codePointAt(i) - 'A'.codePointAt();
        const encryptedItemCode = (item.codePointAt() - 'A'.codePointAt() + shift) % alphabetLength + 'A'.codePointAt();
        ++i;
        result = String.fromCodePoint(encryptedItemCode);
      }
      return result;
    });
    if (this.isDirect) {
      return resultArray.join('');
    } else {
      return resultArray.reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (typeof(encryptedMessage) === 'undefined' || typeof(key) === 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    let i = 0;
    const resultArray = encryptedMessage.toUpperCase().split('').map(function(item) {
      let result = item;
      if (item >= 'A' && item <= 'Z') {
        if (i >= key.length) i = 0;
        const alphabetLength = 'Z'.codePointAt() - 'A'.codePointAt() + 1;
        const shift = key.toUpperCase().codePointAt(i) - 'A'.codePointAt();
        const decryptedItemCode = (item.codePointAt() - 'A'.codePointAt() - shift + alphabetLength) % alphabetLength + 'A'.codePointAt();
        ++i;
        result = String.fromCodePoint(decryptedItemCode);
      }
      return result;
    });
    if (this.isDirect) {
      return resultArray.join('');
    } else {
      return resultArray.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
