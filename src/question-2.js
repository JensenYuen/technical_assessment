import assert from "assert";

/**
 * Question 2
 *  For this question, you are required to implement splitString(input, n)
 *  so that the input string is split into 2 string, where
 *    1. the first part of the output array must have exactly n distinct characters
 *    2. the second part of the output array must have at least n distinct characters
 *
 *  Any combination of the input arguments that does not fulfil the requirements
 *  should throw exception
 *
 * Note: Concatenating the two parts should get back the original input string
 *
 *  Example 1
 *    input:    inputStr = 'helloworld',
 *              n = 3
 *    output:   ['hel', 'loworld']
 *
 * Example 2
 *   input:    inputStr = 'application'
 *             n = 3
 *   output = ['appl', 'ication']
 *
 * Example 3
 *   input:    inputStr = 'apple'
 *             n = 3
 *   output:   Exception
 *
 * Example 4
 *   input:    inputStr = 'foo'
 *             n = 3
 *   output:   Exception
 *
 */

function splitString(inputStr, n) {
  // TODO: Implement logic here
  // Please ensure that the assertions (line 46 - 49) is correct after implementing the logic
  // create two strings to hold front and rear of split string
  let frontOfString = "";
  let rearOfString = "";

  // splits the letter into characters and check for distinct characters
  let charArr = inputStr.split("");
  // calling another function that will check for n distinct characters
  let charObj = charObjectify(charArr, n);

  // gets position to split the string at
  let splitPos = 0;
  Object.values(charObj).forEach((value) => {
    splitPos += value;
  });

  // splits string using String.slice(position)
  rearOfString = inputStr.slice(splitPos);
  // checks rear of String to see if it has n distinct charcters
  // converts the rearString into an obj with n distinct characters as keys
  let rearUniqCharObj = charObjectify(rearOfString.split(""), n);
  let rearUniqChar = Object.keys(rearUniqCharObj).length;

  // if total number of keys is the same n the function will contiune to run
  // else function will throw an error
  if (rearUniqChar === n) {
    // using String.replace, replace the rear of the string with ""
    frontOfString = inputStr.replace(rearOfString, "");
    // push both strings into an array and return the array
    let stringArr = [];
    stringArr.push(frontOfString, rearOfString);
    return stringArr;
  } else {
    return Throw.error;
  }
}

// function to get spliting position of string
const charObjectify = (charArr, n) => {
  let uniqChars = {};
  // Writes each unqiue char into an object
  for (let index = 0; index <= charArr.length; index++) {
    let char = charArr[index];
    if (char in uniqChars) {
      // when true does nothing
      uniqChars[char] += 1;
    } else {
      uniqChars[char] = 1;
    }
    if (Object.keys(uniqChars).length === n) {
      break;
    }
  }
  return uniqChars;
};

// TODO: Uncommenting the assertion should not throw any exception
assert.deepStrictEqual(splitString("helloworld", 3), ["hel", "loworld"]);
assert.deepStrictEqual(splitString("application", 3), ["appl", "ication"]);
assert.throws(() => splitString("apple", 3));
assert.throws(() => splitString("foo", 3));
