function sortedFrequency(arr, num) {
  // set left index to 0
  let left = 0;

  // set right index to length of array
  let right = arr.length - 1;
  let firstIndex = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      firstIndex = mid;
      right = mid - 1;

      // if value at index of mid is less than num, we move the left variabble form 0 to mid + 1 index
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      // if value at index of mid is more than num, we move the right variable from length to mid -1 index
      right = mid - 1;
    }
  }

  if (firstIndex === -1) {
    // num is not in arr
    return -1;
  }

  // used to find the last occurence of the number
  left = firstIndex;
  right = arr.length - 1;
  let lastIndex = firstIndex;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      lastIndex = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return lastIndex - firstIndex + 1;
}

module.exports = sortedFrequency;
