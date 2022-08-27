require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // {TODO: Add your MySQL password}
        password: process.env.DB_PASSWORD,
        database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
);

module.exports = db;