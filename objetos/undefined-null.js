// undefined = quando nao existe a chave, nao existe a informacao
// null = quando nao existe VALOR

const book = {
  title: "Clean code",
  author: "Robert Martin",
  pages: 454,
  language: "English",
  available: true,
};

console.log(book.publisher);

// consulta de chaves com o operador in

console.log("title" in book);
console.log("publisher" in book);

delete book.title;
console.log("title" in book);
