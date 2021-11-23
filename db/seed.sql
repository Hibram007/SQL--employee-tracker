USE employeeTracker;

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

/* Dummy data to fill in columns */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Thomas", "Aquinas", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rodney", "Rager", 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Wreckit", "Ralph", 3, null);

