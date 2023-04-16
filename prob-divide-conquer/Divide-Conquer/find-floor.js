function findFloor(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return arr[mid];
    }

    if (arr[mid] < target) {
      result = arr[mid];
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

module.exports = findFloor;
