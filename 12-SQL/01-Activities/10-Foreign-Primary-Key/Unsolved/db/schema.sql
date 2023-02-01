-- Write your Schema Here -- 
DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE customers (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customer_order (
    id INT NOT NULL,
    customers_id INT,
    order_details TEXT,
    FOREIGN KEY (customers_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);