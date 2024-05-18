
function processArray(arr) {
  return arr.map(num => {
    if (num % 2 === 0) {
      return num ** 2;
    } else {
      return num * 3;
    }
  });
}

function formatArrayStrings(stringArray, numberArray) {
  return stringArray.map((str, index) => {
    const num = numberArray[index];
    if (num % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}
