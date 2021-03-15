const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        counter = 1 + this.calculateDepth(arr[i]);
      }
      if (depth < counter) {
        depth = counter;
      }
    }
    return depth;
  };

};