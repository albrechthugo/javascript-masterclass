const DatabaseError = function (statement, message) {
  this.statement = statement;
  this.message = `${message}: ${this.statement}`;
};

const commandMatchPattern = (command, pattern) => command.match(pattern);

const database = {
  tables: {},
};

database.createTable = function (command) {
  let [, tableName, splittedColumns] = commandMatchPattern(
    command,
    /create table (\w{2,}) \(([^\)]+)\)/
  );
  splittedColumns = splittedColumns.split(",");

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
  let [, tableName, columns, values] = commandMatchPattern(
    command,
    /insert into (\w{2,}) \((.+)\) values \((.+)\)/
  );

  columns = columns.split(", ");
  values = values.split(", ");

  let rows = {};

  columns.forEach((column, i) => {
    rows[column] = values[i];
  });

  this.tables[tableName].data.push(rows);
};

database.select = function (command) {
  let [, columns, tableName, where] = commandMatchPattern(
    command,
    /select (.+) from (\w+)\s?(?:where (.+))?/
  );

  columns = columns.split(", ");

  result = this.tables[tableName].data;

  if (where) {
    const [columnWhere, valueWhere] = where.split(" = ");

    result = this.tables[tableName].data.filter(
      (item) => item[columnWhere] === valueWhere
    );
  }

  return result.map((item) => {
    let obj = {};
    columns.forEach((column) => {
      obj[column] = item[column];
    });

    return obj;
  });
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

  if (command.startsWith("select")) {
    console.log(this.select(command));
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

  database.execute("select name, age from author");

  database.execute("select name, age from author where id = 1");
} catch ({ message }) {
  console.log(message);
}
