const express = require('express');
const sequelize = require('./config/connection');
const dotenv = require('dotenv').config();

console.log(process.env)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
