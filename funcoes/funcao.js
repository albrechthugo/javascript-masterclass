function functionDeclaration(a, b) {
  return a + b;
}

// console.log(functionDeclaration);
// console.log(functionDeclaration(2, 2));

const functionExpression = function (a, b) {
  return a + b;
};

// console.log(functionExpression);
// console.log(functionExpression(2, 2));

const sum = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const calculator = function (fn) {
  return function (a, b) {
    return fn(a, b);
  };
};

// console.log(calculator(sum)(2, 2));
// console.log(calculator(subtract)(2, 2));

// console.log(sum(5));
// console.log(sum(1, 2, 3));

const defaultParameters = function (a = 1, b = 4) {
  return a + b;
};

// console.log(defaultParameters());

const functionArguments = function () {
  let total = 0;

  for (const argument in arguments) {
    total += arguments[argument];
  }

  console.log(total);
};

functionArguments(1, 2, 3, 4, 5);

const functionArgumentsWithRest = function (...params) {
  let total = 0;

  for (const param of params) {
    total += param;
  }

  console.log(total);
};

functionArgumentsWithRest(1, 2, 3, 4, 5);
