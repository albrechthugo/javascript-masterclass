# Exercício 9

## Objetivo

Migre as funções construtoras "DatabaseError" e "Parser" e o objeto "database" para classes.

## Instruções

Migre a função construtora "DatabaseError" para uma classe.
Migre a função construtora "Parser" para uma classe.
Migre o objeto "database" para uma classe.
Instancie a classe "Database" no objeto "database".

## Cenário

```js
let database = new Database();
database.execute(
  "create table author (id number, name string, age number, city string, state string, country string)"
);
database.execute(
  "insert into author (id, name, age) values (1, Douglas Crockford, 62)"
);
database.execute(
  "insert into author (id, name, age) values (2, Linus Torvalds, 47)"
);
database.execute(
  "insert into author (id, name, age) values (3, Martin Fowler, 54)"
);
database.execute("delete from author where id = 2");
console.log(JSON.stringify(database.execute("select name, age from author")));
```

## Resultado

```json
[
  {
    "name": "Douglas Crockford",
    "age": "62"
  },
  {
    "name": "Martin Fowler",
    "age": "54"
  }
]
```

## Conteúdo abordado neste exercício

class
constructor
method
new
