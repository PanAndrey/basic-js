const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] == "^^") {
        cats++;
      }
    }
  });
  return cats;
};
