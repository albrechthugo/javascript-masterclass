# Exercício 8

## Objetivo

Implemente a função construtora "Parser", que será responsável por receber o comando, identificá-lo e extraí-lo após a execução da expressão regular. Além disso, o nome do comando também deve ser retornado para que ele seja selecionado dinamicamente no método "execute".

## Instruções

- Crie uma função construtora chamada "Parser".
- Dentro de "Parser", crie um Map chamando "commands" onde a chave é o nome do comando e o valor é a expressão regular.
- Crie um método chamado "parse" que recebe "statement".
- Dentro do método "parse" itere em "commands" fazendo um match em cada uma das expressões regulares com o "statement" até identificar a expressão responsável pelo comando.
- Após encontrar a expressão regular, retorne um objeto contendo o nome do comando na propriedade "command" e o resultado da execução do método "match" na propriedade "parsedStatement".
- No objeto "database", crie uma propriedade chamada "parser" e instancie a função construtora "Parser".
- No método "execute", execute o método "parse" e faça o chaveamento do comando dinamicamente.
- Refatore os métodos "createTable", "insert", "select" e "delete" para receberem o "parsedStatement" e não mais o "statement".

## Cenário

- database.execute("create table author (id number, name string, age number, city string, state string, country string)");
- database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
- database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
- database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
- database.execute("delete from author where id = 2");
- database.execute("select name, age from author");

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

## Dicas

Dentro do método "parse", você pode iterar sobre o Map de "commands" com for/of e utilizar destructuring para extrair o "command" e o "parsedStatement".

## Conteúdo abordado neste exercício

Object
Map
Map.prototype.set
for/of
Destructuring
Constructor Function
new
