function sum(a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
}

// const result = sum(2, 2, function (result) {
//   console.log(result);
// });

function subtract(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject("Invalid input");
    setTimeout(function () {
      resolve(a - b);
    }, Math.random() * 1000);
  });
}

// subtract(2, 2)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (e) {
//     console.log(e);
//   });

// subtract(2)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (e) {
//     console.log(e);
//   });

Promise.all([subtract(2, 2), subtract(4, 2)])
  .then(function ([resultA, resultB]) {
    console.log("a", resultA);
    console.log("b", resultB);
  })
  .catch(function (e) {
    console.log(e);
  });

// a primeira a retornar com sucesso eh retornada
Promise.race([subtract(2, 2), subtract(4, 2)])
  .then(function (firstResolvedValue) {
    console.log(firstResolvedValue);
  })
  .catch(function (e) {
    console.log(e);
  });
