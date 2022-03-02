console.log(JSON.stringify(10));
console.log(JSON.stringify("javascript"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify({ name: "hugo", age: "21" }));
console.log(JSON.stringify([1, 2, 3, 4, 5]));
console.log(JSON.stringify(null));

console.log(JSON.parse("10"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("[1, 2, 3, 4, 5]"));
console.log(JSON.parse("null"));

const obj1 = {
  name: "hugo",
};

const obj2 = {
  name: "hugo",
};

console.log(obj1 === obj2);
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
