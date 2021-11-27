var inquirer = require('inquirer');
const { removeListener } = require('./db/connection');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
const promptUser = () => {
    return inquirer.prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'list',
        name: 'start prompt',
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
]);
};


promptUser().then(answers => console.log(answers));