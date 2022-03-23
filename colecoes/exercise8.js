const DatabaseError = function (statement, message) {
  this.statement = statement;
  this.message = `${message}: ${this.statement}`;
};

const Parser = function () {
  this.commands = new Map([
    ["createTable", /create table (\w{2,}) \(([^\)]+)\)/],
    ["insert", /insert into (\w{2,}) \((.+)\) values \((.+)\)/],
    ["select", /select (.+) from (\w+)\s?(?:where (.+))?/],
    ["delete", /delete from (.+) (?:where (.+))/],
  ]);

  this.parse = function (statement) {
    for (const [command, parsedStatement] of this.commands) {
      if (parsedStatement.test(statement)) {
        return {
          command,
          result: statement.match(parsedStatement),
        };
      }
    }
  };
};

const commandMatchPattern = (command, pattern) => command.match(pattern);

const database = {
  tables: {},
};

Object.setPrototypeOf(database, {
  parser: new Parser(),
});

database.createTable = function ([, tableName, splittedColumns]) {
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

database.insert = function ([, tableName, columns, values]) {
  columns = columns.split(", ");
  values = values.split(", ");

  let rows = {};

  columns.forEach((column, i) => {
    rows[column] = values[i];
  });

  this.tables[tableName].data.push(rows);
};

database.select = function ([, columns, tableName, where]) {
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

database.delete = function ([, tableName, condition]) {
  let [columnWhere, valueWhere] = condition.split(" = ");

  this.tables[tableName].data = this.tables[tableName].data.filter(
    (item) => item[columnWhere] !== valueWhere
  );
};

database.execute = function (statement) {
  if (!statement) throw new DatabaseError(statement, "Invalid statement");

  const { command, result } = this.parser.parse(statement);
  return this[command](result);
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

  database.execute("delete from author where id = 2");

  console.log(database.execute("select name, age from author"));
  console.log(JSON.stringify(database, undefined, " "));
} catch ({ message }) {
  console.log(message);
}
