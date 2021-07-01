const config = require("./config.json");
const mysql = require("mysql2");
const express = require("express");
const app = express();

const port = 3000;
const host = "127.0.0.1";

const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

module.exports = connection.connect(function (err) {
  if (err) {
    return console.error("Error: " + err.message);
  } else {
    console.log("My SQL connection");
  }
});
let query = "SELECT * FROM heroes";
let sum;
app.get("/", (req, res) => {
  connection.query(query, (error, result, field) => {
    console.log(error);
    sum = result;
    console.log(result);
  });
  res.send(sum);
});

app.listen(port, host, () => {
  console.log(
    `App Started on PORT ${3000} \n http://${host}:${port} \n Click Ctrl + C for stop server`
  );
});
