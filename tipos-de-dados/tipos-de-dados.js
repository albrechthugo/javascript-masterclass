console.log("-- primitivos -- \n");

console.log(typeof 10);
console.log(typeof "Hugo");
console.log(typeof true);
console.log(typeof Symbol("iterator"));
console.log(typeof null);
console.log(typeof undefined);

console.log("\n-- objetos -- \n");

console.log(
  typeof function sum(a, b) {
    return a + b;
  }
);

console.log(typeof { name: "Hugo Albrecht" });
console.log(typeof [1, 2, 4, 66]);
console.log(typeof /[a-zA-Z]+/);
console.log(typeof new Date());
