// a variavel implicita que faz referencia para o objeto responsavel pela sua invocacao

const calculateArea = function () {
  return this.x * this.y;
};

const rectangle = {
  x: 10,
  y: 2,
  calculateArea,
};

console.log(rectangle.calculateArea());
