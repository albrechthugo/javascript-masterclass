const languages = ["python", "c", "javascript", "python"];

console.log(languages.indexOf("python"));
console.log(languages.indexOf("java"));
console.log(languages.lastIndexOf("python"));
console.log(languages.includes("java"));
console.log(languages.includes("javascript"));
console.log(languages.includes("c"));
console.log(languages.includes("python"));

const ooLanguages = ["smalltalk", "c++"];
const functionalLanguages = ["haskell", "scheme"];

const languages2 = ooLanguages.concat(functionalLanguages);

console.log(languages2.slice(0, 2));
console.log(languages2.slice(2, 3));
console.log(languages2.slice(1));
console.log(languages2.slice());
console.log(languages2.join(", "));
