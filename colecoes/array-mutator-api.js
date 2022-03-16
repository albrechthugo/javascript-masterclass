// push adiciona um elemento no final
const languages = ["c", "java"];
languages.push("javascript", "python");
console.log(languages);

// pop remove um elemento no final
languages.pop();
console.log(languages);

// unshift adiciona um elemento no inicio
languages.unshift("ruby");
console.log(languages);

// shift remove um elemento no inicio
languages.shift("ruby");
console.log(languages);

// splice remove, substitui ou adiciona um ou mais elementos em uma determinada posicao
console.log(languages.splice(0, 1));
console.log(languages.splice(0, 1, "c++", "c#"));
console.log(languages.splice(0, 2, "c"));
console.log(languages);

// sort faz a ordenacao do array, se retornar -1 ou 0 fica como esta, se retornar 1 inverte a ordem
const languages2 = [
  { name: "python", year: "1991" },
  { name: "c", year: "1972" },
  { name: "java", year: "1995" },
];

languages2.sort((a, b) => b.year - a.year);

console.log(languages2);

// reverse inverte a ordem dos elementos
languages.reverse();
console.log(languages);

// fill preenche os elementos de acordo com a posicao de inicio e fim
languages.fill("javascript", 0, 1);
console.log(languages);
