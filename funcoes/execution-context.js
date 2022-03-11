// ambiente onde o codigo eh executado, composto pela variavel object, scope chain e this

const v1 = 10;

const fn1 = function () {
  const v1 = 100;
  const fn2 = function () {
    const v1 = 1000;
    // console.log(v1);
    const v2 = 10000;
    // console.log(v2);
  };

  fn2();
};

fn1();
// console.log(v2);

const obj1 = {
  p1: 10,
  getP1() {
    const fn1 = function () {
      return this.p1;
    };

    return fn1();
  },
};

const obj2 = {
  p1: 10,
  getP1() {
    const that = this;
    const fn1 = function () {
      return that.p1;
    };

    return fn1();
  },
};

const obj3 = {
  p1: 10,
  getP1() {
    const fn1 = function () {
      return this.p1;
    };

    return fn1.call(this);
  },
};

const obj4 = {
  p1: 10,
  getP1() {
    const fn1 = () => {
      return this.p1;
    };

    return fn1();
  },
};

console.log(obj1.getP1());
console.log(obj2.getP1());
console.log(obj3.getP1());
console.log(obj4.getP1());
