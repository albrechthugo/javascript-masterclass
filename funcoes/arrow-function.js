const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const calculator = (fn) => (a, b) => fn(a, b);

console.log(calculator(sum)(2, 2));
console.log(calculator(subtract)(2, 2));

// arrow function nao possui this nem a variavel arguments

const person = {
  name: "Hugo",
  city: "Joinville",
  year: 2000,
  getAge: () => new Date().getFullYear() - this.year,
};

console.log(person.getAge());

const createPerson = (name, city, year) => ({ name, city, year });
console.log(createPerson("Hugo", "Joinville", 2000));
