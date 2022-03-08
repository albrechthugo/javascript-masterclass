// por meio das operacoes call e apply eh possivel invocar uma funcao passando o this por parametro

const calculateArea = function (fn) {
  return fn(Math.PI * Math.pow(this.radius, 3));
};

const circle = {
  radius: 10,
  calculateArea,
};

console.log(calculateArea.call(circle, Math.round));
// bom usar apply quando eh necessario passar os parametros dinamicamente, sem conhece-los
console.log(calculateArea.apply(circle, [Math.ceil]));

// bind

const calculateAreaForCircle = calculateArea.bind(circle);
console.log(calculateAreaForCircle(Math.round));
console.log(calculateAreaForCircle(Math.ceil));
