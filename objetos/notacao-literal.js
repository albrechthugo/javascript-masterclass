const book = {
  title: "Clean code",
  author: "Robert Martin",
  pages: 454,
  language: "English",
  available: true,
};

console.log(book);

// com o es6 veio o short hand notation

const title = "Clean code";
const author = "Robert Martin";
const pages = 454;
const language = "English";
const available = true;

const book2 = {
  title,
  author,
  pages,
  language,
  available,
};

console.log(book2);

const testKey = "titlekey";

const book3 = {
  [testKey]: "Clean code",
  author: "Robert Martin",
  pages: 454,
  language: "English",
  available: true,
};

console.log(book3);

const book4 = {};
const key = "title";

book4[key] = "clean code";
book4.author = "robert c martin";
book4.pages = 454;

console.log(book4);
console.log(book4["author"]);

for (const key in book) {
  console.log(book[key]);
}
