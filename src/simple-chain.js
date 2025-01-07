const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 >= this.getLength() || position - 1 <= 0) {
      throw new Error("You can\'t remove incorrect link!");
    }
    let tempArray = [];
    for (let i = 0; i < this.getLength(); ++i) {
      if (i === position - 1) { continue; }
      tempArray.push(this.array[i]);
    }
    this.array = tempArray;
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let string = '';
    for (let i = 0; i < this.getLength() - 1; i++) {
      string += '( ' + this.array[i] + ' )~~';
    }
    string += '( ' + this.array[this.getLength() - 1] + ' )';
    this.array = [];
    return string;
  },
  array: [],
};

module.exports = {
  chainMaker
};
