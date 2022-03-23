const languages = new Map([
  ["fortran", 1957],
  ["lisp", 1958],
  ["cobol", 1959],
]);

const iterator = languages[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function createIterable(...array) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < array.length) {
            return {
              value: array[i++],
              done: false,
            };
          } else {
            return {
              value: undefined,
              done: true,
            };
          }
        },
      };
    },
  };
}

const myIterable = createIterable("fortran", "cobol", "lisp");
console.log([...myIterable]);
