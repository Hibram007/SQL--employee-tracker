// consts
const express = require('express');
const router = express.Router();
const etrackerConnection = require('../../db/connection');

//GET routes for - job title - role ID - department role - salary
// role table (full) being pulled and referencing department table for dept name
router.get('/role', (req, res) => {
    const sql = `SELECT role.*, 
    department.name AS department_name
    FROM role
    LEFT JOIN department ON role.department_id = department.id`;
  
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


//POST Route - add a role with : name , salary, dept for role


// export statement