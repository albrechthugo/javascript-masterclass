console.log("utilizando a funcao construtora number\n");

console.log(Number("10"));
console.log(Number("9.9"));
console.log(Number("0xFF"));
console.log(Number("0b10"));
console.log(Number("0o10"));
console.log(Number());
console.log(Number("Javascript"));

console.log("\nutilizando operadores\n");

console.log(~~"10");
console.log(+"10");
console.log("10" - 0);
console.log("10" * 1);
console.log("10" / 1);

console.log("\nutilizando o metodo toString\n");

console.log((0xa).toString(10));
console.log((0b1010).toString(16));
console.log((010).toString(2));
console.log((10).toString(8));

console.log("\nutilizando o parseInt\n");

console.log(parseInt("10"));
console.log(parseInt("9.9"));
console.log(parseInt("a", 16));
console.log(parseInt("11", 2));
console.log(parseInt("010", 8));

console.log("\nutilizando o parseFloat\n");

console.log(parseFloat("10"));
console.log(parseFloat("9.9"));
console.log(parseFloat("0xFF"));
console.log(parseFloat("0b10"));
