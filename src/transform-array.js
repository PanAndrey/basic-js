module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i != 0) {
          result.push(arr[i - 1])
        };
        break;
      case "--discard-next":
        if (i == arr.length - 1) {
          break;
        }
        i++;
        if (arr[i + 1] == "--double-prev" || arr[i + 1] == "--discard-prev") {
          i++;
        };
        break;
      case "--discard-prev":
        result.pop();
        break;
      default:
        result.push(arr[i]);
    }
  }
  return result;
};