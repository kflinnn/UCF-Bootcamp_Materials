const express = require('express');
//import and use mysql
const mysql = require('mysql2');
const { printTable } = require("console-table-printer");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Funciton to connect database to server.js
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);
//Query database - query is your SQL statement, this one is select. It is just reading the information. Reads the data row from top to bottom and will be stored in the results parameter.
db.query('SELECT * FROM students', function (err, results) {
  printTable(results);
});

//Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
