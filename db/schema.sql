CREATE DATABASE donuts_db;
USE donuts_db;

CREATE TABLE donuts (
id INT NOT NULL AUTO_INCREMENT,
donut_name VARCHAR(225) NOT NULL,
devoured BOOLEAN DEFAULT 0,
PRIMARY KEY (id)
);