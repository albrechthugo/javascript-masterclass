export default class Parser {
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
