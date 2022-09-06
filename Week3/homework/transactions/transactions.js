const util = require("util");
const mysql = require("mysql");
const tables = require("./transactions-create-tables.js");
const values = require("./transactions-insert-values.js");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  //   database: "transaction",
});

const createDb = [
  `DROP DATABASE IF EXISTS transaction;`,
  `CREATE DATABASE transaction;`,
  `USE transaction;`,
];

const execQuery = util.promisify(connection.query.bind(connection));

// async function transaction() {}

async function seedDatabase() {
  connection.connect();

  try {
    const createDatabase = createDb.map((query) => execQuery(query));
    await Promise.all(createDatabase);
    const createTables = tables.map((query) => execQuery(query));
    await Promise.all(createTables);
    const insertValues = values.map((query) => execQuery(query));
    await Promise.all(insertValues);

    await execQuery("START TRANSACTION");

    await execQuery(
      "UPDATE account SET balance= balance -1000 WHERE account_number = 101;"
    );
    await execQuery(
      `INSERT INTO account_changes (account_number,amount,changed_date,remark) 
      VALUES
      (101,1000,"2020-01-01","sent to account 102");`
    );
    await execQuery(
      "UPDATE account SET balance= balance +1000 WHERE account_number = 102;"
    );
    await execQuery(
      `INSERT INTO account_changes (account_number,amount,changed_date,remark) 
      VALUES
      (102,1000,"2020-01-01","received from account 101");`
    );

    await execQuery("COMMIT");

    console.log("transaction succeeded");
  } catch (error) {
    console.error(error);
    await execQuery("ROLLBACK");
    connection.end();
  }

  connection.end();
}

seedDatabase();
