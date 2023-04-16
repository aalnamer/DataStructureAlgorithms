function countZeroes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      return arr.slice(i).length;
    }
  }
  return 0;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]));
module.exports = countZeroes;
