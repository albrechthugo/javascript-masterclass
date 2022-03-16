# Exercício 6

## Objetivo

Implemente o método "select". Para isso, é necessário extrair as informações a partir do comando, filtrando os dados pela cláusula "where" e montando os objetos de acordo com as colunas selecionadas.

## Instruções

Dada o comando:

select name, age from author where id = 1

Crie um método chamado "select".
Na função "execute", invoque o método "select".
No método "select", retorne todos os registros considerando apenas as colunas selecionadas.
Extraia a cláusula where do comando.
Crie as variáveis columnWhere e valueWhere.
Filtre os registros conforme a cláusula where.

## Cenário

database.execute("create table author (id number, name string, age number, city string, state string, country string)");
database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
database.execute("select name, age from author");
database.execute("select name, age from author where id = 1");

## Resultado

```json
[
   {
      "name":"Douglas Crockford",
      "age":"62"
   },
   {
      "name":"Linus Torvalds",
      "age":"47"
   },
   {
      "name":"Martin Fowler",
      "age":"54"
   }
][
   {
      "name":"Douglas Crockford",
      "age":"62"
   }
]
```

## Dicas

Você pode utilizar a operação Array.prototype.map para converter um array em outro e ainda a operação Array.prototype.filter para filtrar os dados. Você pode querer ignorar um grupo de captura, para isso utiliza a notação ?: dentro do grupo, por exemplo (?: where (.+))?

## Conteúdo abordado neste exercício

in
for/of
Object
Array
Array.prototype.push
Array.prototype.filter
Array.prototype.map
Array.prototype.forEach
