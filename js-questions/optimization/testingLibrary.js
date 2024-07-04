function expect(actual) {
  const stringifiedActual = JSON.stringify(actual);
  const toExist = () => {
    if (actual == null) {
      throw Error("Expected value does not exist.");
    }
  };

  const toBe = (expected) => {
    let stringifiedExpected = JSON.stringify(expected);
    if (stringifiedActual !== stringifiedExpected) {
      throw Error(
        `Expected value is ${stringifiedActual}, but got ${stringifiedExpected}.`
      );
    }
  };

  const toBeType = (expectedType) => {
    const currentType = typeof actual;
    if (expectedType !== currentType) {
      throw Error(`Expected type is ${expectedType}, but got ${currentType}.`);
    }
  };

  return {
    toBe,
    toExist,
    toBeType,
  };
}

function describe(testSuiteNmae, fn) {
  console.log(`Starting testSuite : ${testSuiteNmae}`);
  try {
    fn();
  } catch (err) {
    const { testCaseName, error } = err;
    console.error(
      `failed running ${testSuiteNmae} on test case ${testCaseName} with ${error}`
    );
  }
}

function test(testCaseName, fn) {
  console.log(`Starting test: ${testCaseName}`);
  try {
    fn();
    console.log(`Test ${testCaseName} passed.`);
  } catch (error) {
    throw { testCaseName, error };
  }
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

describe("Math Operations", () => {
  test("Adding two numbers", () => {
    expect(add(3, 4)).toBe(7); // Test Adding two numbers passed.
    /** Starting testSuite : Math Operations
       Starting test: Adding two numbers
       Test Adding two numbers passed. **/
  });

  test("Subtracting two numbers", () => {
    expect(sub(4, 2)).toBe(2); // Test Subtracting two numbers passed.
    expect(sub(7, 2)).toBe(3);
    /** Starting test: Subtracting two numbers
       failed running Math Operations on test case Subtracting two 
       numbers with Error: Expected value is 5, but got 3.  **/
  });
});
