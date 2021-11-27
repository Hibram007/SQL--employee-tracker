// consts
const express = require('express');
const router = express.Router();
const etrackerConnection = require('../../db/connection');

// geting SQL error " role.salary ''[ don"t know if I cna double up like this[]


// GET routes view - employee data - employee ids - first name - last name job titles - depts - salaries - managers
//SELECTING  employee table ( full) and referencing role table for title and salary
router.get('/employee', (req, res) => {
    const sql = `SELECT employee.*, 
    role.title AS role_title,
    role.salary AS role_salary
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
// Create a employee - change roletitle by changing role ID
router.post('/employee', ({ body }, res) => {
 
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [
      body.first_name,
      body.last_name,
      body.role_id,
      body.manager_id
    ];
  
    etrackerConnection.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
  

// PUT route - update employee role - by: select employee to update ( ID) and add new role
// Update an employees's role by changing role id
router.put('/employee/:id', (req, res) => {

    const sql = `UPDATE employee SET role_id = ? 
                 WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];
  
    etrackerConnection.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'employee not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });

// export staement
module.exports = router;