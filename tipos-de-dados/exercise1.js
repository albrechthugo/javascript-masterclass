const command =
  "create table author (id number, name string, age number, city string, state string, country string)";

const regex = /^((\w+)(\s{1})){3}(\(((\w+(\s){1}\w+\,?(\s)?){1,})\)$)/;
const result = regex.exec(command);

const tableName = result[2];
const columns = result[5].split(", ");

console.log(tableName);
console.log(columns);
