function* forever() {
  let value = 1;
  while (true) {
    try {
      const reset = yield value++;
      if (reset) value = 1;
    } catch (error) {
      console.log(error);
    }
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
today();
// console.log(foreverGenerator.return("retornou"));
console.log(foreverGenerator.throw("error"));
console.log(foreverGenerator.next(true));
console.log(foreverGenerator.next());

// onde é possivel utilizar os generators???

// function createIterable(...array) {
//   return {
//     [Symbol.iterator]() {
//       let i = 0;
//       return {
//         next() {
//           if (i < array.length) {
//             return {
//               value: array[i++],
//               done: false,
//             };
//           } else {
//             return {
//               value: undefined,
//               done: true,
//             };
//           }
//         },
//       };
//     },
//   };
// }

function createIterable(...array) {
  return {
    *[Symbol.iterator]() {
      let i = 0;
      while (i < array.length) yield array[i++];
    },
  };
}

const languages = createIterable("fortran", "lisp", "cobol");

for (const language of languages) {
  console.log(language);
}

function sum(a, b) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a + b);
    }, 1000);
  });
}

function async(fn) {
  const generator = fn();
  recursiveAsync(generator);
}

function recursiveAsync(generator, result) {
  const obj = generator.next(result);

  if (obj.done) return;

  obj.value.then(function (result) {
    recursiveAsync(generator, result);
  });
}

async(function* () {
  const a = yield sum(2, 2);
  const b = yield sum(4, 2);
  const result = yield sum(a, b);
  console.log(result);
});
