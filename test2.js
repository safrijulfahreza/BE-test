/**
 * Direction:
 * Remove duplicated data from array
 *
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 3, 4];

function result(data) {
  // Your Code Here
  let sorted = data.sort();
  let results = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] != sorted[i]) {
      results.push(sorted[i]);
    }
  }
  return results;

  // other solution
  // return [...new Set(data)].sort();
}

console.log(result(data));
module.exports = result;
