/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];

function result(words) {
  // Your Code Here
  let sortedWords = words.sort();
  let fristElement = sortedWords[0];
  let lastElement = sortedWords[sortedWords.length - 1];
  let arrFirstElemLength = fristElement.length;
  let i = 0;
  while (
    i < arrFirstElemLength &&
    fristElement.charAt(i) === lastElement.charAt(i)
  ) {
    i++;
  }

  return fristElement.substring(0, i);
}

console.log(result(words));
module.exports = result;
