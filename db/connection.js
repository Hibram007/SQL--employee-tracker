const mysql = require("mysql2");

const etrackerConnection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '1998Hlsg8sql',
	database: 'employeetracker',
});

module.exports = etrackerConnection;