const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  str = String(str);
  addition = String(addition);
  if (addition) {
    let addStr = (addition + additionSeparator).repeat(additionRepeatTimes);
    str = str + addStr.slice(0, addStr.length - additionSeparator.length);
    str = (str + separator).repeat(repeatTimes);

    return str.slice(0, str.length - separator.length);
  } else {
    str = (str + separator).repeat(repeatTimes);

    return str.slice(0, str.length - separator.length);
  }
};
