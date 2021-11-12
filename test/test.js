const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const test2 = require("../test2");
const test4 = require("../test4");
const test5 = require("../test5");

describe("Testing function on test2.js, test4.js, test5.js files", () => {
  it("test2.js should return sorted array with no duplicates", () => {
    assert.deepEqual(test2([1, 4, 2, 3, 5, 3, 2, 4]), [1, 2, 3, 4, 5]);
  });
  it("test4.js should return missing number", () => {
    expect(test4([9, 6, 4, 2, 3, 5, 7, 0, 1])).to.equal(8);
  });
  it("test5.js should return prefix", () => {
    expect(test5(["flower", "flow", "flight"])).to.equal("fl");
  });
});
