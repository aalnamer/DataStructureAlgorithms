function findRotatedIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      // If the middle element is the target, return its index
      return mid;
    }

    if (arr[start] <= arr[mid]) {
      // If the left half of the array is sorted
      if (target >= arr[start] && target < arr[mid]) {
        // If the target is within the left half, continue searching in the left half
        end = mid - 1;
      } else {
        // If the target is not within the left half, continue searching in the right half
        start = mid + 1;
      }
    } else {
      // If the right half of the array is sorted
      if (target > arr[mid] && target <= arr[end]) {
        // If the target is within the right half, continue searching in the right half
        start = mid + 1;
      } else {
        // If the target is not within the right half, continue searching in the left half
        end = mid - 1;
      }
    }
  }

  // If the target is not found in the array, return -1
  return -1;
}

module.exports = findRotatedIndex;
