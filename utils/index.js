function binarySearch(array, target) {
  var left = 0;
  var right = array.length - 1;
  var middlePosition = Math.floor(left + right / 2);

  while (array.length > middlePosition) {
    const middleElement = array[middlePosition];

    if (middleElement === target) return middlePosition;

    if (target < middleElement) {
      right = middlePosition - 1;
    }

    if (target > middleElement) {
      left = middlePosition + 1;
    }

    if (left > right) return -1;

    middlePosition = Math.floor(left + right / 2);
  }
  return -1;
}

module.exports = binarySearch;
