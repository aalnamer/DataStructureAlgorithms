/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else {
    // starts with nums[0] * the next number, and this will keep going until the next number is 0, then we multiply 1 by the total product
    return nums[0] * product(nums.slice(1));
  }
}
/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // initalize the count
  if (words.length === 1) {
    return words[0].length;
  } else {
    const firstWordLength = words[0].length;
    const restOfArrayLength = longest(words.slice(1));
    return Math.max(firstWordLength, restOfArrayLength);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length < 2) {
    return str;
  }
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) {
    return -1;
  }
  if (arr[idx] === val) {
    return idx;
  }
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") {
    return "";
  } else {
    return revString(str.substr(1)) + str.charAt(0);
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strings.push(...gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val) {
    // means the value is on the right side so we check the right side next
    return binarySearch(arr, val, mid + 1, end);
  } else {
    // means the value is on the left side so we check the left side next
    return binarySearch(arr, val, start, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
