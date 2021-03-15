const CustomError = require("../extensions/custom-error");


const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push("~( " + value + " )~")
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] != undefined) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error('Error');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("").slice(1, this.chain.join("").length - 1);
    this.chain = [];
    return result;
  }
}
module.exports = chainMaker;
