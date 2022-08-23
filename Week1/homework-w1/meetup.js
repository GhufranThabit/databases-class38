const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "meetup",
});

db.connect((err) => {
  if (err) throw err;
  console.log(" MySQL Connected!");
});

//Delete meetup database if exists

db.query("DROP DATABASE IF EXISTS meetup", function (error, result) {
  if (error) throw error;
  console.log("Database has been DELETED");
});

//Create meetup database

db.query("CREATE DATABASE IF NOT EXISTS meetup", function (error, result) {
  if (error) throw error;
  console.log("Database has been created");
});

// Use meetup database to create tables

db.query("USE meetup");

// Create Invitee table

let sql =
  "CREATE TABLE Invitee (invitee_no INT AUTO_INCREMENT PRIMARY KEY, invitee_name VARCHAR(255), invited_by VARCHAR(255) )";
db.query(sql, function (error, result) {
  if (error) throw error;
  console.log("Invitee table has been created");
});

// Insert more than one record into Invitee table
sql = "INSERT INTO Invitee VALUES?";
let values = [
  [1, "Ghufran", "HYF"],
  [2, "Ahmet", "HYF"],
  [3, "Omar", "HYF"],
  [4, "John", "HYF"],
  [5, "Lyla", "HYF"],
];
db.query(sql, [values], function (error, result) {
  if (error) throw error;
  console.log("Invitee table values has been added");
});

//Create Room table

sql =
  "CREATE TABLE Room (room_no INT AUTO_INCREMENT PRIMARY KEY, room_name VARCHAR(255), floor_number INT )";
db.query(sql, function (error, result) {
  if (error) throw error;
  console.log("Room table has been created");
});

// Insert more than one record into Room table

sql = "INSERT INTO Room VALUES?";
values = [
  [1, "Art", 1],
  [2, "Yoga", 2],
  [3, "Music", 2],
  [4, "Cooking", 1],
  [5, "Playing", 3],
];
db.query(sql, [values], function (error, result) {
  if (error) throw error;
  console.log("Room table values has been added");
});

//Create Meeting table

sql =
  "CREATE TABLE Meeting (meeting_no INT AUTO_INCREMENT PRIMARY KEY, meeting_title VARCHAR(255), starting_time DATETIME, ending_time DATETIME, room_no INT,FOREIGN KEY(room_no) REFERENCES Room(room_no))";
db.query(sql, function (error, result) {
  if (error) throw error;
  console.log("Meeting table has been created");
});

// Insert more than one record into Meeting table

sql = "INSERT INTO Meeting VALUES?";
values = [
  [1, "lesson 1", "2022-08-22 09:00:00", "2022-08-22 10:00:00", 1],
  [2, "lesson 1", "2022-08-23 09:00:00", "2022-08-23 10:00:00", 2],
  [3, "lesson 1", "2022-08-24 09:00:00", "2022-08-24 10:00:00", 2],
  [4, "lesson 1", "2022-08-25 09:00:00", "2022-08-25 10:00:00", 1],
  [5, "lesson 1", "2022-08-26 09:00:00", "2022-08-26 10:00:00", 3],
];
db.query(sql, [values], function (error, result) {
  if (error) throw error;
  console.log("Meeting table values has been added");
});

db.end();
