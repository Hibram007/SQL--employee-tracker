var inquirer = require('inquirer');
const mysql = require("mysql")
const cTable = require('console.table');

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

      case "View All Employee's By Roles?":
          viewAllRoles();
        break;
      case "View all Emplyees By Deparments":
          viewAllDepartments();
        break;
      
      case "Add Employee?":
            addEmployee();
          break;

      case "Update Employee":
            updateEmployee();
          break;
  
        case "Add Role?":
            addRole();
          break;
  
        case "Add Department?":
            addDepartment();
          break;

        }
})
}


// write code to link each of the prompts with the back end get/post/update routes
promptUser().then(answers => console.log(answers));