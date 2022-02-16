console.log("algumas constantes uteis usadas em varias equacoes\n");

console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.LOG2E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);

console.log("\narredondamento, numero absoluto e validacao de sinais\n");

console.log(Math.abs(10));
console.log(Math.abs(-10));
console.log(Math.ceil(1.1));
console.log(Math.ceil(-1.1));
console.log(Math.floor(9.9));
console.log(Math.floor(-9.9));
console.log(Math.round(4.5));
console.log(Math.round(-4.5));
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.trunc(2.3));
console.log(Math.trunc(-2.3));

console.log("\nequacoes matematicas\n");

console.log(Math.cbrt(8));
console.log(Math.cos(Math.PI / 3));
console.log(Math.exp(1));
console.log(Math.hypot(3, 4));
console.log(Math.log(1));
console.log(Math.pow(2, 10));
console.log(Math.sin(Math.PI / 2));
console.log(Math.sqrt(4));
console.log(Math.tan(Math.PI / 4));

console.log("\nminimo, maximo e numero aleatorio\n");

const numbers = [1, 2, 3, 4, 5, 6];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));
console.log(Math.random());
