const charsets = new Set(["asc", "utf-8"]);
console.log(charsets);
console.log(charsets.size);

charsets.add("iso-8859-1");

console.log(charsets);
console.log(charsets.size);

charsets.forEach(function (charset) {
  console.log(charset);
});

console.log(charsets.has("iso-8859-1"));
console.log(charsets.has("asc"));
console.log(charsets.has("utf-8"));
console.log(charsets.has("utf"));

console.log(charsets.delete("asc"));
console.log(charsets);

const duplicated = ["hugo", "hugo", "hugo", "andreas"];

console.log(new Set(duplicated));
