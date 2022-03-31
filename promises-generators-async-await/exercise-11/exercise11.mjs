import Database from "./database.mjs";

try {
  const database = new Database();

  database
    .execute(
      "create table author (id number, name string, age number, city string, state string, country string)"
    )
    .then(() => {})
    .catch((e) => {
      throw e;
    });

  Promise.all([
    database.execute(
      "insert into author (id, name, age) values (1, Douglas Crockford, 62)"
    ),

    database.execute(
      "insert into author (id, name, age) values (2, Linus Torvalds, 47)"
    ),

    database.execute(
      "insert into author (id, name, age) values (3, Martin Fowler, 54)"
    ),
  ])
    .then(() => {})
    .catch((e) => {
      throw e;
    });

  database
    .execute("select name, age from author")
    .then((result) => console.log(JSON.stringify(result, undefined, " ")))
    .catch((e) => {
      throw e;
    });
} catch ({ message }) {
  console.log(message);
}
