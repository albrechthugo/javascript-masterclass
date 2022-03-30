// import { PI as pi, pow } from "./math.mjs";
import * as math from "./math.mjs";

export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return math.PI * math.pow(this.radius, 2);
  }
}
