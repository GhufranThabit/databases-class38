const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

const CheckResults = (error, results) => {
  if (error) throw error;
  console.table(results);
};

// What are the names of countries with population greater than 8 million?
db.query("SELECT Name FROM country WHERE Population > 8000000", CheckResults);

// What are the names of countries that have “land” in their names?
db.query("SELECT Name FROM country WHERE Name LIKE 'land%'", CheckResults);

// What are the names of the cities with population in between 500,000 and 1 million?
db.query(
  "SELECT Name FROM city WHERE Population BETWEEN 500000 and 1000000",
  CheckResults
);

// What's the name of all the countries on the continent ‘Europe’?
db.query("SELECT Name FROM country WHERE Continent = 'Europe'", CheckResults);

// List all the countries in the descending order of their surface areas.
db.query("SELECT Name FROM country ORDER BY SurfaceArea DESC ", CheckResults);

// What are the names of all the cities in the Netherlands?
db.query("SELECT Name FROM city WHERE CountryCode ='NLD'", CheckResults);

// What is the population of Rotterdam?
db.query("SELECT Population FROM city WHERE Name ='Rotterdam'", CheckResults);

// What's the top 10 countries by Surface Area?
db.query(
  "SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10 ",
  CheckResults
);

// What's the top 10 most populated cities?
db.query(
  "SELECT Name FROM city ORDER BY Population DESC LIMIT 10 ",
  CheckResults
);

// What is the population number of the world?
db.query("SELECT SUM (Population) FROM country ", CheckResults);

db.end();
