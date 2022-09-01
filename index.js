const {
  mainMenu,
  departmentQuestions,
  positionQuestions,
  employeeQuestions,
  updateEmployeeQuestions,
} = require("./questions");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const mysql = require("mysql2");
// const db = require("./db/connection");
const PORT = process.env.PORT || 3000;
const express = require("express");
const route = require("./routes/api");
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // {TODO: Add your MySQL password}
    password: process.env.DB_PASSWORD,
    database: "employee_tracker",
  },
  console.log(`Connected to the employee_tracker database.`)
);

// Use apiRoutes
app.use("/api", route);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

function allChoices() {
  console.log("testing");
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all positions",
          "View all employees",
          "Add a department",
          "Add a position",
          "Add an employee",
          "Update an employee position",
          "Exit",
        ],
        name: "mainMenu",
      },
    ])
    .then((answers) => {
      console.log(answers);
      switch (answers.mainMenu) {
        case "View all departments":
          viewAllDep();
          break;
        case "View all positions":
          viewAllPositions();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDep();
          break;
        case "Add a position":
          addPositions();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee position":
          updateEmployee();
          break;
        case "Exit":
          process.exit(0);
      }
    });
}

function viewAllDep() {
  db.query("SELECT * FROM department", function (err, results) {
    console.log("\n");
    console.table(results);
  });
  allChoices();
}

function viewAllPositions() {
  db.query("SELECT * FROM position", function (err, results) {
    console.log("\n");
    console.table(results);
  });
  allChoices();
}

function viewAllEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.log("\n");
    console.table(results);
  });
  allChoices();
}

function addDep() {
  inquirer.prompt(departmentQuestions).then((answers) => {
    console.log(answers);
    db.query(
      `INSERT INTO department(name) VALUES ('${answers.addDep}')`,
      function (err, results) {
        console.log("\n");
        console.log(`${answers.addDep} added to list of departments`);
        console.table(results);
      }
    );
    allChoices();
  });
}

function addPositions() {
  inquirer.prompt(positionQuestions).then((answers) => {
    console.log(answers);
    db.query(
      `INSERT INTO position(title, salary, department_id) VALUES ('${answers.addPositionsName}', ${answers.addPositionsSalary},${answers.addPositionsDep})`,
      function (err, results) {
        console.log(`\n`);
        console.log(`${answers.addPositionsName} added to list of positions`);
        console.table(results);
      }
    );
    allChoices();
  });
}

function addEmployee() {
  inquirer.prompt(employeeQuestions).then((answers) => {
    console.log(answers);
    db.query(
      `INSERT INTO position(first_name, last_name, new_employee_position, new_employee_manager) VALUES ('${answers.firstName}', ${answers.lastName}',${answers.newEmployeeposition},${answers.newEmployeeManager})`,
      function (err, results) {
        console.log(`\n`);
        console.log(
          `${answers.firstName} ${answers.lastName} added to list of employees`
        );
        console.table(results);
      }
    );
    allChoices();
  });
}

function updateEmployee() {
  inquirer.prompt(updateEmployeeQuestions).then((answers) => {
    console.log(answers);
    db.query(
      `UPDATE employee SET(first_name, last_name, new_employee_position, new_employee_manager) VALUES ('${answers.firstName}', ${answers.lastName}',${answers.newEmployeeposition},${answers.newEmployeeManager})`,
      function (err, results) {
        console.log(`\n`);
        console.log(
          `${answers.firstName} ${answers.lastName} added to list of employees`
        );
        console.table(results);
      }
    );
    allChoices();
  });
}

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.get("/", (req, res) => {
    res.json({
      message: "App running",
    });
  });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

allChoices();
