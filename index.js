const {mainMenu, departmentQuestions, positionQuestions, employeeQuestions} = require('./questions');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const db = require('./config/connection');
const PORT = process.env.PORT || 3005;
const express = require('express');
const app = express();





function allChoices() {
    inquirer.prompt({mainMenu})
    .then(answers => {
        // console.log(answers)
        switch(answers.mainMenu) {
            case 'View all departments':
                viewAllDep()
            break; 
            case 'View all positions':
                viewAllPositions()
            break;
            case 'View all employees':
                viewAllEmployees()
            break;
            case 'Add a department':
                addDep()
            break;
            case 'Add a position':
                addPositions()
            break;
            case 'Add an employee':
                addEmployee()
            break;
            case 'Update an employee position':
                updateEmployee()
            break;
            case 'Exit':
                process.exit(0);
        }

    })

}

function viewAllDep() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log('\n');
        consoleTable(results);
    });
    allChoices()
}

function viewAllPositions() {
    db.query('SELECT * FROM position', function (err, results) {
        console.log('\n');
        console.table(results);
    });
    allChoices()
}

function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log('\n');
        console.table(results);
    });
    allChoices()
}

function addDep() {
    inquirer.prompt(departmentQuestions)
    .then(answers => {
        console.log(answers)
        db.query(`INSERT INTO department(name) VALUES ('${answers.addDep}')`, function (err, results) {
            console.log('\n');
            console.log(`${answers.addDep} added to list of departments`)
          });
        allChoices()
    })
}

function addPositions() {
    inquirer.prompt(positionQuestions)
    .then(answers => {
        console.log(answers)
        db.query(`INSERT INTO position(title, salary, department_id) VALUES ('${answers.addPositionsName}', ${answers.addPositionsSalary},${answers.addPositionsDep})`, function (err, results){
            console.log(`\n`);
            console.log(`${answers.addPositionsName} added to list of positions`)
        });
        allChoices()
    })
}

function addEmployee() {
    inquirer.prompt(employeeQuestions)
    .then(answers => {
        console.log(answers)
        db.query(`INSERT INTO position(first_name, last_name, new_employee_position, new_employee_manager) VALUES ('${answers.firstName}', ${answers.lastName}',${answers.newEmployeeposition},${answers.newEmployeeManager})`, function (err, results){
            console.log(`\n`);
            console.log(`${answers.firstName} ${answers.lastName} added to list of employees`)
        })
    })
}

function updateEmployee() {
    inquirer.prompt(updateEmployee)
    .then(answers => {
        console.log(answers)
        db.query(`UPDATE employee SET(first_name, last_name, employee_id, manager_id) WHERE`, function (err, results){
            console.log(`\n`);
            console.log(`${answers.firstName} ${answers.lastName} added to list of employees`)
        })
    })
}

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      allChoices();   
    });
});