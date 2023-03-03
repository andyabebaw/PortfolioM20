DROP DATABASE IF EXISTS department_db;
-- Creates the "department_db" database --
CREATE DATABASE department_db;

-- Makes it so all of the following code will affect department_db --
USE department_db;

-- Creates the table "department" within department_db --
CREATE TABLE department (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id int AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
id int AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
title VARCHAR(30),
salary DECIMAL,
department_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (department_id)
REFERENCES department(id)
);


CREATE TABLE employee(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
  REFERENCES role(id),
  manager_id INT,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);
