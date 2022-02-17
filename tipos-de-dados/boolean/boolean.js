console.log(typeof true);
console.log(typeof false);
console.log(new Boolean(true));
console.log(new Boolean(false));
console.log(typeof new Boolean(false));
console.log(typeof new Boolean(false));

let condition = true;

if (condition) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

// apenas os valores abaixo sao convertidos para false

console.log(!!0);
console.log(!!NaN);
console.log(!!"");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
