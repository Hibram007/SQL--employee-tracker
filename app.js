var inquirer = require('inquirer');
const mysql = require("mysql")
const cTable = require('console.table');
const etrackerConnection = require('./db/connection');

//Main Menu prompt- 1st Prompt

function promptUser() {
 inquirer.prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'list',
        name: 'start prompt choices',
        message: 'What do you want to do?',
        choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            //Add questions
           "add a department",
            "add a role",
            "add an employee",
            //update question
            "update an employee role"
        ],
      }
]).then(function(val) {
    
    switch (val.choice) {
        case "View All Employees?":
          viewAllEmployees();
        break;

      case "View All Employees By Role?":
          viewAllRoles();
        break;
      case "View all Employees By Department":
          viewAllDepartments();
        break;
      
      case "Add An Employee":
            addEmployee();
          break;

      case "Update An Employee":
            updateEmployee();
          break;
  
        case "Add A Role":
            addRole();
          break;
  
        case "Add A Department":
            addDepartment();
          break;
        }
})
}

//View all employees route
function viewAllEmployees() {
    etrackerConnection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
  })
}

//View all Roles
function viewAllRoles() {
    etrackerConnection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", 
    function(err, res) {
    if (err) throw err
    console.table(res)
    startPrompt()
    })
  }

  // 

// write code to link each of the prompts with the back end get/post/update routes
promptUser().then(answers => console.log(answers));