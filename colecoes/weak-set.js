const ws1 = new WeakSet();

const obj1 = {};
const obj2 = {};

ws1.add(obj1);
ws1.add(obj2);

console.log(ws1);

console.log(ws1.has(obj1));
console.log(ws1.has(obj2));
console.log(ws1.has({}));

ws1.delete(obj2);

console.log(ws1.has(obj2));

const validCircles = new WeakSet();

function Circle(radius) {
  validCircles.add(this);
  this.radius = radius;
}

Circle.prototype.calculateArea = function () {
  if (!validCircles.has(this)) throw "Invalid circle";
  return Math.PI * Math.pow(this.radius, 2);
};

const circle1 = new Circle(10);

const circle2 = {
  radius: 5,
};

console.log(circle1.calculateArea(10));
console.log(circle1.calculateArea.call(circle2));
