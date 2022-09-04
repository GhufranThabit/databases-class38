import mysql from "mysql";
import util from "util";
import query1 from "./keys.js";
import { query2, query3 } from "./relationships.js";
import query4 from "./Joins.js";
import query5 from "./Aggregate Functions.js";

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "university",
};

const database = [
  `DROP DATABASE IF EXISTS university;`,
  `CREATE DATABASE university;`,
  `USE university;`,
];
const CheckResults = (error, results) => {
  if (error) throw error;
  console.table(results);
};

async function seedDatabase() {
  const connection = mysql.createConnection(CONNECTION_CONFIG);
  const execQuery = util.promisify(connection.query.bind(connection));

  try {
    const createDatabase = database.map((query) => execQuery(query));
    await Promise.all(createDatabase);

    const createKeyTables = query1.map((query) => execQuery(query));
    await Promise.all(createKeyTables);

    const createRelationTables = query2.map((query) => execQuery(query));
    await Promise.all(createRelationTables);

    const insertIntoTables = query3.map((query) => execQuery(query));
    await Promise.all(insertIntoTables);

    query4.map((query) => execQuery(query, CheckResults));
    query5.map((query) => execQuery(query, CheckResults));

    connection.end();
  } catch (err) {
    console.error(err.message);
    connection.end();
  }
}

seedDatabase();
