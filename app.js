
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

//Db connection - Moved from db folder to consolidate
const etrackerConnection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '1998Hlsg8sql',
	database: 'employeetracker',
});

etrackerConnection.connect(function(err) {
  if (err) throw err;
  start();
});

// User prompts wrapped in a fucntion to call it at end- See M.12
function start() {
  inquirer
    .prompt({
      type: "list",
      name: "option",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Department",
        "View Role",
        "View Employee",
        "Update Employee Role"
      ]
    })

    .then(function(result) {
      console.log("You entered: " + result.option);
      switch (result.option) {
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "View Department":
          viewDepartment();
          break;
        case "View Role":
          viewRole();
          break;
        case "View Employee":
          viewEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "Type in the department name you want to add",
      name: "department"
    })
    .then(function(res) {
      const department = res.department;
      const query = `INSERT INTO department (name) VALUES("${department}")`;
      etrackerConnection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Type in the job title you want to add",
        name: "title"
      },
      {
        type: "input",
        message: "Type in the salary for this position",
        name: "salary"
      },
      {
        type: "input",
        message: "Add the department ID for this position",
        name: "departmentID"
      }
    ])
    .then(function(res) {
      const title = res.title;
      const salary = res.salary;
      const departmentID = res.departmentID;
      const query = `INSERT INTO role (title, salary, department_id) VALUE("${title}", "${salary}", "${departmentID}")`;
      etrackerConnection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Employee first name?",
        name: "firstName"
      },
      {
        type: "input",
        message: "Employee last name?",
        name: "lastName"
      },
      {
        type: "input",
        message: "Employee's role ID?",
        name: "roleID"
      },
      {
        type: "input",
        message: "Employee's manager ID?",
        name: "managerID"
      }
    ])
    .then(function(res) {
      const firstName = res.firstName;
      const lastName = res.lastName;
      const roleID = res.roleID;
      const managerID = res.managerID;
      const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE("${firstName}", "${lastName}", "${roleID}", "${managerID}")`;
     etrackerConnection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
}

function viewDepartment() {
  const query = "SELECT * FROM department";
 etrackerConnection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewRole() {
  const query = "SELECT * FROM role";
  etrackerConnection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewEmployee() {
  const query = "SELECT * FROM employee";
  etrackerConnection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function updateRole() {
  const query = "SELECT id, first_name, last_name, role_id  FROM employee";
  etrackerConnection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    {
      inquirer.prompt({
        type: "input",
        message: "What employee needs to be updated? (Use employee id column to select employee)",
        name: "employee"
      });
    }
  });
}