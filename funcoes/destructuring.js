const language = "C;Dennis Ritchie".split(";");
const [name = "Name", author = "Author", year = "Year"] = language;

console.log(name, author, year);

const person = {
  personName: "Hugo",
  personYear: 2000,
  company: {
    name: "PicPay",
  },
};

const {
  personName: n,
  personYear: y,
  company: { name: cn },
} = person;

console.log(n, y, cn);

const sum = function ([a, b]) {
  return a + b;
};

console.log(sum([2, 2]));

const subtract = function ({ a, b }) {
  return a - b;
};

console.log(subtract({ a: 2, b: 2 }));
