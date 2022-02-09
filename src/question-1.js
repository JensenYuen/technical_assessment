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
  // create a new object to hold transformed data
  let transformedData = {};
  employees.forEach((employee) => {
    // we know each employee has a dept & salary
    let dept = employee["dept"];
    let salary = employee["salary"];
    // get the dept and check if the key is present in transformedData object
    if (dept in transformedData) {
      let maxSalary = transformedData[dept].maxSalary;
      // if true, employeeCount += 1
      transformedData[dept].employeeCount += 1;
      // check if current maxSalary is larger than salary of current employee in loop
      if (maxSalary < salary) {
        // if true, sets current employee salary as new maxSalary
        transformedData[dept].maxSalary = salary;
      }
    } else {
      // else, creates key and value {employeeCount = 1, and set maxSalary = salary}
      let deptDetails = { employeeCount: 1, maxSalary: salary };
      transformedData[dept] = deptDetails;
    }
  });

  return transformedData;
};

// TODO: Uncommenting the assertion should not throw any exception
assert.deepStrictEqual(transformData(employees), output);
