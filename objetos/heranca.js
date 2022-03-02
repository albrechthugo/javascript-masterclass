// no js, a heranca eh realizada entre objetos e nao classes, baseada em prototipos

const functionalLanguage = {
  paradigm: "Functional",
};

const scheme = {
  name: "Scheme",
  year: 1975,
  // __proto__: functionalLanguage,
};

Object.setPrototypeOf(scheme, functionalLanguage);

const javascript = {
  name: "Javascript",
  year: 1995,
  // __proto__: functionalLanguage,
};

Object.setPrototypeOf(javascript, functionalLanguage);

for (const key in scheme) {
  console.log(key, scheme.hasOwnProperty(key));
}

const haskell = Object.create(functionalLanguage);
haskell.name = "Haskell";
haskell.year = 1990;
