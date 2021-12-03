--DB information
DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker;

USE employeeTracker;

/* Table Creation */
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)

);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

--SEED info
/*Department options*/
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Sanitation");
INSERT INTO department (name)
VALUES ("Demolition");


/* role info - title/ salary/ dep ID */
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Janitor", 40000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Boom Operator", 90000, 3);

/* Employee Dummy data to fill in columns */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Thomas", "Aquinas", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rodney", "Rager", 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Wreckit", "Ralph", 3, null);

-- code for selecting Tables
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
