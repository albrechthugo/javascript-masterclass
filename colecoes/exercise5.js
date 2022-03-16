const DatabaseError = function (statement, message) {
  this.statement = statement;
  this.message = `${message}: ${this.statement}`;
};

const database = {
  tables: {},
};

database.createTable = function (command) {
  const commandIdentifier = /create table (\w{2,}) \(([^\)]+)\)/;

  const tableName = command.match(commandIdentifier)[1];
  const splittedColumns = command.match(commandIdentifier)[2].split(",");

  const data = [];
  let columns = {};

  for (const column of splittedColumns) {
    const [columnName, columnType] = column.trim().split(" ");
    columns[columnName] = columnType;
  }

  this.tables[tableName] = {
    columns,
    data,
  };
};

database.insert = function (command) {
  const commandIdentifier = /insert into (\w{2,}) \((.+)\) values \((.+)\)/;

  let [, tableName, columns, values] = command.match(commandIdentifier);
  columns = columns.split(", ");
  values = values.split(", ");

  let rows = {};

  columns.forEach((column, i) => {
    rows[column] = values[i];
  });

  this.tables[tableName].data.push(rows);
};

database.execute = function (command) {
  if (command.startsWith("create table")) {
    this.createTable(command);
    return;
  }

  if (command.startsWith("insert into")) {
    this.insert(command);
    return;
  }

  throw new DatabaseError(command, "Sintax error");
};

try {
  database.execute(
    "create table author (id number, name string, age number, city string, state string, country string)"
  );

  database.execute(
    "insert into author (id, name, age, city, state, country) values (1, Douglas Crockford, 62, Sao Paulo, SP, Brasil)"
  );

  database.execute(
    "insert into author (id, name, age, city, state, country) values (2, Linus Torvalds, 47, Sao Paulo, SP, Brasil)"
  );

  database.execute(
    "insert into author (id, name, age, city, state, country) values (3, Martin Fowler, 54, Sao Paulo, SP, Brasil)"
  );

  database.execute("select id, name from author");
} catch (e) {
  console.log(e.message);
}

console.log(JSON.stringify(database, undefined, " "));
