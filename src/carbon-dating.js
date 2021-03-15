const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(N) {
  if (typeof (N) === "string" && N > 0 && N <= 15) {
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / N) / (0.693 / HALF_LIFE_PERIOD));
    return t;
  } else {
    return false;
  }
};
