// a comparacao de objetos eh feita por referencia em memoria

const book1 = {
  title: "clean code",
};

const book2 = {
  title: "clean code",
};

console.log(book1 == book2);
console.log(book1 === book2);

let equal = true;

for (const key in book1) {
  if (book1[key] !== book2[key]) equal = false;
}

for (const key in book2) {
  if (book1[key] !== book2[key]) equal = false;
}

console.log(equal);
