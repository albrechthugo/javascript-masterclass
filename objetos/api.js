const javascript = Object.create({});

Object.assign(
  javascript,
  {
    name: "javascript",
    year: 1995,
    paradigm: "oo and functional",
  },
  {
    author: "brendan eich",
  }
);

console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));

const obj1 = {
  name: "hugo",
};

const obj2 = {
  name: "hugo",
};

console.log(Object.is(obj1, obj2));

const person = {};
Object.defineProperty(person, "name", {
  value: "hugo",
  configurable: true,
  enumerable: true,
  writable: true,
});

console.log(person);

/*
    preventExtensions = impede que o objeto tenha novas propriedades mas permite modificar ou remover as existentes

    seal = impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite modificar as existentes

    freeze = impede que o objeto tenha novas propriedades, impede que apague ou modifique as existentes
*/
