const database = Object.create({});

database.tables = {};

database.createTable = function (command) {
  const commandIdentifier = /create table (\w{2,}) \(([^\)]+)\)/;

  const tableName = command.match(commandIdentifier)[1];
  const splittedColumns = command.match(commandIdentifier)[2].split(",");

  const data = [];
  let columns = Object.create({});

  for (const column of splittedColumns) {
    const [columnName, columnType] = column.trim().split(" ");
    columns[columnName] = columnType;
  }

  this.tables[tableName] = {
    columns,
    data,
  };
};

database.execute = function (command) {
  if (command.startsWith("create table")) this.createTable(command);
};

database.execute(
  "create table author (id number, name string, age number, city string, state string, country string)"
);
console.log(JSON.stringify(database, undefined, "  "));
