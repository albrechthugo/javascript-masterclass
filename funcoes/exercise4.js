const DatabaseError = function (statement, message) {
  this.statement = statement;
  this.message = message;
};

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
  if (command.startsWith("create table")) {
    this.createTable(command);
  } else {
    throw new DatabaseError(command, "Sintax error");
  }
};

try {
  database.execute(
    "create table author (id number, name string, age number, city string, state string, country string)"
  );
} catch (e) {
  console.log(`${e.message}:${e.statement}`);
}

try {
  database.execute("select id, name from author");
} catch (e) {
  console.log(`${e.message}: ${e.statement}`);
}
