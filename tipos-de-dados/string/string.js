// podem ser declaradas de 3 formas, aspas simples, duplas ou com acento grave

/* 
podem ser declaradas com a funcao construtora String
porem essa forma eh menos performatica 
*/
console.log(new String("Javascript"));

let counter = 0;

console.time("performance");
while (counter < 10000) {
  ("Javascript");
  counter++;
}
console.timeEnd("performance");

let counterFuncaoConstrutora = 0;

console.time("performanceFuncaoConstrutora");
while (counterFuncaoConstrutora < 10000) {
  new String("javascript");
  counterFuncaoConstrutora++;
}
console.timeEnd("performanceFuncaoConstrutora");

/* 
alguns caracteres de controle para identacao de strings

\b = backspace
\f = form feed
\n = new line
\r = carriege return
\t = horizontal tab
\v = vertical tab
*/

let diasDaSemana =
  "- 0 Domingo\n- 1 Segunda\n- 2 Terça\n- 4 Quarta\n- 5 Quinta\n- 6 Sexta\n- 7 Sábado";

console.log(diasDaSemana);

let diasDaSemanaCodePoints =
  "\u0030 \u002d \u0053\u0075\u006e\u000A\u0031 \u002d \u004d\u006f\u006e\u000A\u0032 \u002d \u0054\u0075\u0065\u000A\u0033 \u002d \u0057\u0065\u0064\u000A\u0034 \u002d \u0054\u0068\u0075\u000A\u0035 \u002d \u0046\u0072\u0069\u000A\u0036 \u002d \u0053\u0061\u0074";

console.log(diasDaSemanaCodePoints);
