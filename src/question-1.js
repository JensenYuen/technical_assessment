import assert from "assert";

/**
 * Question 1
 *  For this question, you are required to implement transformData(employee)
 *  so that it takes in employees and return output.
 *
 */

// Takes in this
const employees = [
  {
    name: "Mr Coffee",
    dept: "IT",
    salary: 3000
  },
  {
    name: "Mr Tea",
    dept: "Finance",
    salary: 2500
  },
  {
    name: "Ms Milo",
    dept: "Finance",
    salary: 2600
  },
  {
    name: "Ms Tehbing",
    dept: "Finance",
    salary: 2600
  },
  {
    name: "Ms Holick",
    dept: "IT",
    salary: 2700
  },
  {
    name: "Mr Oolong",
    dept: "IT",
    salary: 2400
  }
];

// Return this
const output = {
  IT: {
    employeeCount: 3,
    maxSalary: 3000
  },
  Finance: {
    employeeCount: 3,
    maxSalary: 2600
  }
};

const transformData = (employees) => {
  // TODO: Implement transformation logic here
  // Please ensure that the assertions (line 64) is correct after implementing the logic

  return {};
};

// TODO: Uncommenting the assertion should not throw any exception
// assert.deepStrictEqual(transformData(employees), output);
