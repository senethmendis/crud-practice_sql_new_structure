const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const databaseport = process.env.databaseport;

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
  port: databaseport,
});

db.connect((err) => {
  if (err) return console.log("Error Connecting to db!");
  console.log("Connected to database!");
});

module.exports = db;
