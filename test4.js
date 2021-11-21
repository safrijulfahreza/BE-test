/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 11];

function result(numbers) {
  // Your Code Here
  // let sorted = numbers.sort();
  // for (let i = 0; i < sorted.length; i++) {
  //   if (sorted[i] != i) {
  //     return i;
  //   }
  // }

  // other solution, find multiple missing number start from smallest to largest number in a array
  let result = [];
  let sorted = numbers.sort((a, b) => {
    return a - b;
  });
  for (let i = sorted[0]; i < sorted[sorted.length - 1]; i++) {
    if (sorted.indexOf(i) == -1) {
      result.push(i);
    }
  }
  return result;
}

console.log(result(numbers));
module.exports = result;
