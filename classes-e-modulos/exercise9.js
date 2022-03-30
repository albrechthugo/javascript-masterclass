class DatabaseError {
  constructor(statement, message) {
    this.statement = statement;
    this.message = `${message}: ${this.statement}`;
  }
}

class Parser {
  constructor() {
    this.commands = new Map([
      ["createTable", /create table (\w{2,}) \(([^\)]+)\)/],
      ["insert", /insert into (\w{2,}) \((.+)\) values \((.+)\)/],
      ["select", /select (.+) from (\w+)\s?(?:where (.+))?/],
      ["delete", /delete from (.+) (?:where (.+))/],
    ]);
  }

  parse(statement) {
    for (const [command, parsedStatement] of this.commands) {
      if (parsedStatement.test(statement)) {
        return {
          command,
          result: statement.match(parsedStatement),
        };
      }
    }
  }
}

class Database {
  constructor() {
    this.tables = {};
    this.parser = new Parser();
  }

  createTable([, tableName, splittedColumns]) {
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
  }

  insert([, tableName, columns, values]) {
    columns = columns.split(", ");
    values = values.split(", ");

    let rows = {};

    columns.forEach((column, i) => {
      rows[column] = values[i];
    });

    this.tables[tableName].data.push(rows);
  }

  select([, columns, tableName, where]) {
    columns = columns.split(", ");

    let result = this.tables[tableName].data;

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
  }

  delete([, tableName, condition]) {
    let [columnWhere, valueWhere] = condition.split(" = ");

    this.tables[tableName].data = this.tables[tableName].data.filter(
      (item) => item[columnWhere] !== valueWhere
    );
  }

  execute(statement) {
    if (!statement) throw new DatabaseError(statement, "Invalid statement");

    const { command, result } = this.parser.parse(statement);

    return this[command](result);
  }
}

try {
  const database = new Database();
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

  console.log(
    JSON.stringify(
      database.execute("select name, age from author"),
      undefined,
      "  "
    )
  );
} catch ({ message }) {
  console.log(message);
}
