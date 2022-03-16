const languages = ["python", "c", "java"];
// const languages = new Array("python", "c", "java");
console.log(typeof languages);

const numbers = new Array(1, 2, 3);
// const numbers = new Array(10) ///// output -> [10 empty items]
console.log(numbers);

delete languages[0];
console.log(languages);
console.log(languages.length);
