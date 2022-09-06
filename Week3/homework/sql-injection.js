const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

conn.connect();

const CheckResults = (error, results) => {
  if (error) throw error;
  console.table(results);
};

function getPopulation(Country, name, code, cb) {
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}

getPopulation(
  "country",
  `'Afghanistan' or "1"="1"`,
  `'AFG' or"1"="1"`,
  CheckResults
);

conn.end();
/*
 Examples to take advantage of SQL-injection :

---To return population for all countries
 `SELECT Population FROM Country WHERE code = "AFG" or 1=1;`
 
---To return all records for all countries
 `SELECT * FROM Country WHERE Name = '' or ""="" and code='' or""="";`
 `SELECT * FROM Country WHERE Name = 'Afghanistan' or "1"="1" and code='AFG' or"1"="1";`
 `SELECT * FROM Country WHERE Name = 'Afghanistan' or 1=1;
  
 */
// Rewriting the function so that it is no longer vulnerable to SQL injection
function getPopulation(Country, name, code, cb) {
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = ? and code = ?`,
    [name, code],
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}
