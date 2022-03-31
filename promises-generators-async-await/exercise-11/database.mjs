import DatabaseError from "./database-error.mjs";
import Parser from "./parser.mjs";

export default class Database {
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
    return new Promise((resolve, reject) => {
      if (!statement) reject(new DatabaseError(statement, "Invalid statement"));

      setTimeout(() => {
        const { command, result } = this.parser.parse(statement);

        resolve(this[command](result));
      }, 1000);
    });
  }
}
