-- Clears out database if it already exists
DROP DATABASE IF EXISTS books_db;
--Creates the books_db database
CREATE DATABASE books_db;

-- Commands to work out of this database
USE books_db;

-- Creates a table within in the books_db database
CREATE TABLE biographies (
  -- id is row number, INT means number, NOT NULL means it cannot be blank
  id INT NOT NULL,
  --name is the column header, VARCHAR(100) gives a max character count of 100 to the input, NOT NULL means it cannot be blank
  name VARCHAR(100) NOT NULL
);

