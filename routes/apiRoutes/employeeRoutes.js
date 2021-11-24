// consts
const express = require('express');
const router = express.Router();
const etrackerConnection = require('../../db/connection');



// GET routes view - employee data - employee ids - first name - last name job titles - depts - salaries - managers
//SELECTING  employee table ( full) and refernecing role table for title and salary
router.get('/employee', (req, res) => {
    const sql = `SELECT employee.*, 
    role.title AS role_title
    role.salary AS role.salary
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id`;
  
    etrackerConnection.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });



// POST route - add an employee with info : first /last name, role , manager


// PUT route - update employee role - by: select employee to update ( ID) and add new role


// export staement