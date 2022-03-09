const _new = function (fn, ...params) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  fn.apply(obj, params);
  return obj;
};

const Person = function (name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
};

Person.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

const person1 = _new(Person, "Hugo", "Joinville", 2000);
console.log(person1);
