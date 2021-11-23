const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// figure out which cod eyou want where
// keep connection .js with env or not. 
//Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // Your MySQL username,
//     user: 'root',
//     // Your MySQL password
//     password: '',
//     database: 'election'
//   },
//   console.log('Connected to the election database.')
// );

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  