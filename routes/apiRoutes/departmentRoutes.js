// consts
const express = require('express');
const router = express.Router();
const etrackerConnection = require('../../db/connection');

// GET route for : - dept names  - dept ids
// Get all departments - only dept table
router.get('/department', (req, res) => {
    const sql = `SELECT * FROM department`;
  
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

  
//POST route for : add dept with : name of dept

// export statement