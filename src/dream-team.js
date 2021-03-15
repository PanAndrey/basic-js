const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == null) {
    return false;
  }

  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) == "string") {
      let wordArr = members[i].split("");
      while (wordArr[0] == " ") {
        wordArr.splice(0, 1);
      }
      arr.push(wordArr[0].toUpperCase());
    }
  }
  return arr.sort().join("");
};
