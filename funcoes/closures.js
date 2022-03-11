// todas as funcoes se comportam como closures, que tem seu scope chain estatico, definido no momento da sua criacao

const v1 = 10;

function fn1() {
  console.log(v1);
}

function fn2(fn1) {
  const v1 = 100;
  fn1();
}

fn2(fn1);

// apesar de estatico o scope chain faz referencia para objetos que estao em memoria e podem ser compartilhados por mais de uma funcao

function fn3() {
  let v1 = 10;

  return {
    m1() {
      console.log(++v1);
    },
    m2() {
      console.log(--v1);
    },
  };
}

const obj1 = fn3();
obj1.m1();
obj1.m2();

const obj2 = {};

// for (var v3 = 0; v3 < 3; v3++) {
//   obj2[v3] = function () {
//     console.log(v3);
//   };
// }

// for (var v3 = 0; v3 < 3; v3++) {
//   obj2[v3] = (function (vparam) {
//     return function () {
//       console.log(vparam);
//     };
//   })(v3);
// }

for (var v3 = 0; v3 < 3; v3++) {
  obj2[v3] = function () {
    console.log(this.vparam);
  }.bind({ vparam: v3 });
}

obj2[0]();
obj2[1]();
obj2[2]();
