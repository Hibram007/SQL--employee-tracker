const mysql = require("mysql");

const etrackerConnection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: DB_USER,
	password: DB_PW,
	database: DB_NAME,
});

module.exports = etrackerConnection;