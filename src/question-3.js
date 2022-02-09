import assert from "assert";

/**
 * Question 3
 *  Given a list of integers, calculate the difference between each pair of adjacent integers,
 *  forming a sequence. For example, an input of {5, 6, 3, 9, -1} will be calculated as
 *  {6-5, 3-6, 9-3, -1-9} = {1, -3, 6, -10}. Formally, given a[1], a[2], ... , a[k],
 *  we can calculate its sequence as b[1], b[2], ... , b[k-1], where b[i] = a[i+1] - a[i].
 *
 *  Now, a sequence of order N is a sequence where we iteratively apply the above process N times.
 *  For example, if A = {5, 6, 3, 9, -1}, a sequence of order 2 will be: {5, 6, 3, 9, -1} -> {1, -3, 6, -10} -> {-3-1, 6-(-3), -10-6} = {-4, 9, -16}.
 *
 *  You may assume the following:
 *    - The input will contain between 1 to 20 integers (inclusive)
 *    - Each integer will be between -200 and 200, inclusive.
 *    - n will be between 0 and K-1, inclusive, where K is the number of elements in the input
 *
 * Example 1
 *    input:    sequence = [113, 24, -52, 98, 102, -42, -23, 9, 192],
 *              order = 8
 *    output:   [1945]
 *
 * If you are not sure of what assert.deepStrictEqual does, you can read from
 *  https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message
 *
 */

function calculate(sequence, order) {
  // TODO: Implement logic here
  // Please ensure that the assertions (line 36) is correct after implementing the logic
  // create a for loop where the stop condition is index === order
  for (let index = 1; index <= order; index++) {
    // calls subrator function and passes sequence into function
    // where sequence will be overwritten with a shortenSequence in another function
    sequence = subtrator(sequence);
  }
  // when loop is complete returns sequence.first as sequence is still an array
  return sequence;
}

// A function to subtrate the values within the array and returns the subtrated array
const subtrator = (sequence) => {
  let shortenSequence = [];
  for (let index = 0; index < sequence.length - 1; index++) {
    // takes sequence[i] - sequence[i-1] and gets the result
    // pushs result into new array
    shortenSequence.push(sequence[index + 1] - sequence[index]);
  }
  // returns the new array with shorten number sequence
  return shortenSequence;
};

// TODO: Uncommenting the assertion should not throw any exception
assert.deepStrictEqual(
  calculate([113, 24, -52, 98, 102, -42, -23, 9, 192], 8),
  [1945]
);
