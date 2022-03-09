# Exercício 3

## Objetivo

Crie dois métodos no objeto "database" chamados de "createTable" e "execute". O comando "createTable" já foi implementado no exercício anterior, mova o código e utilize o método "execute" para invocar dinamicamente o método "createTable".

## Instruções

No objeto "database", crie uma função chamada "createTable", que recebe o comando por parâmetro.
Mova o código responsável por criar a tabela para dentro do método "createTable".
Crie uma função chamada "execute", invocando dinamicamente a função "createTable".

## Cenário

database.execute("create table author (id number, name string, age number, city string, state string, country string)");

## Resultado

{
"tables": {
"author": {
"columns": {
"id": "number",
"name": "string",
"age": "number",
"city": "string",
"state": "string",
"country": "string"
},
"data": []
}
}
}

## Dicas

Não se esqueça de utilizar o "this" para referenciar a propriedade "tables" do objeto "database". Você pode utilizar a operação String.prototype.startsWith para verificar se o comando começa com "create table" e realizar a chamada para o método "createTable".

## Conteúdo abordado neste exercício

Function
if
String.prototype.startsWith
this
Method Notation
