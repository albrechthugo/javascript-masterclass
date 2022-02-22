// primitivo
// unico
// imutavel
// atua como uma chave unica em um objeto

console.log(Symbol("a"));
console.log(Symbol("a") === Symbol("aaa"));

let regexp = /Javascript/;
regexp[Symbol.match] = false;
console.log("/Javascript/".startsWith(regexp));
