const rectangle = {
  set x(value) {
    if (value > 0) {
      this._x = value;
    } else {
      throw new Error("invalid value for x");
    }
  },
  set y(value) {
    if (value > 0) {
      this._y = value;
    } else {
      throw new Error("invalid value for y");
    }
  },
  get area() {
    return this._x * this._y;
  },
};

rectangle.x = 10;
rectangle.y = -2;
console.log(rectangle.area);
