//You're given an array of positive integers and a target sum.
// Return true if any two distinct numbers in the array add up to the target. Otherwise, return false.

function twoSums(arr, target) {
  const createSet = new Set();

  for (const num of arr) {
    const complement = target - num;
    if (createSet.has(complement)) {
      return true;
      //If you ever want to return the actual pair, just change:

      //return [num, complement];
    }
    createSet.add(num);
  }
  return false;
}

twoSums([4, 7, 1, -3, 2], 5);
