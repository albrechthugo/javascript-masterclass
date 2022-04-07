function sum(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject("invalid inputs");
    setTimeout(function () {
      resolve(a + b);
    }, 1000);
  });
}

(async function () {
  try {
    const functions = [sum(2, 2), sum(4, 2)];
    const results = [];

    for await (let result of functions) {
      results.push(result);
    }

    const [a, b] = results;
    const result = await sum(a, b);
    console.log(result);
  } catch (error) {
    console.error(e);
  }
})();
