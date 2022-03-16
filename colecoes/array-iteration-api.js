const languages = ["c", "java", "ruby"];

languages.forEach((item, index) => {
  console.log(`${item} - indice - ${index}`);
});

console.log(languages.filter((item) => item.startsWith("j")));

console.log(languages.find((_, index) => index === 0));

console.log(languages.some((item) => item === "ruby"));

console.log(languages.every((item) => item === "ruby"));

const languages2 = languages.map((item, index) => ({ name: item, index }));
console.log(languages2);

const frameworks = [
  { name: "angular.js", contributors: 1548 },
  { name: "ember.js", contributors: 746 },
  { name: "vue.js", contributors: 240 },
];

const totalOfContributors = frameworks.reduce((total, { contributors }) => {
  return total + contributors;
}, 0);

console.log(totalOfContributors);
