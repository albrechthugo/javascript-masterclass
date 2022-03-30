// um tipo especial de funcao q atuam como um template para a criacao de objetos
// formada pelo contructor, prototypes methods, static methods

// const Square = class {};

class Shape {
  toString() {
    return `area: ${this.calculateArea()}`;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  // prototype method
  toString() {
    return `side: ${this.side}; ${super.toString()}`;
  }

  // prototype method
  calculateArea() {
    return Math.pow(this.side, 2);
  }

  static fromArea(area) {
    return new Square(Math.sqrt(area));
  }
}

const square = new Square(4);
console.log(square.toString());
console.log(square.calculateArea());

console.log(Square.fromArea(16));

// como seria feita via function?

/*
    function SquareFunction(side) {
    this.side = side;
    }

    SquareFunction.prototype.calculateArea = function () {
    return Math.pow(this.side, 2);
    };

    SquareFunction.prototype.toString = function () {
    return `side: ${this.side}; area: ${this.calculateArea()}`;
    };

    SquareFunction.fromArea = function (area) {
    return new Square(Math.sqrt(area));
    };

    const square2 = new SquareFunction(4);
    console.log(square2.toString());
    console.log(square2.calculateArea());

    console.log(SquareFunction.fromArea(16));
*/

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  toString() {
    return `radius: ${this.radius}; ${super.toString()}`;
  }

  static fromArea(area) {
    return new Circle(Math.sqrt(area / Math.PI));
  }
}

const circle = new Circle(10);
console.log(circle.toString());
console.log(circle.calculateArea());
