/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  let sorted = numbers.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] != i) {
      return i;
    }
  }
}

console.log(result(numbers));
module.exports = result;
