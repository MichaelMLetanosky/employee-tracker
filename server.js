const express = require('express');
const inquirer = require("inquirer");
const mysql = require('mysql2');
const { exit } = require("process");
// const db = require("./db");
// require("console.table");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'rootroot',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

const departmentQuestions = [{
    name: "name", type: "input",
    message: "What is the name of the department?",
}]

const roleQuestions = [{
    name: "title", type: "input",
    message: "What is the role's title?",
    },{
    name: "salary", type: "input",
    message: "What is the salary for the role?",
    },{
    name: "department_id", type: "input",
    message: "What is the id of the department the role belongs to?",
}]

const employeeQuestions = [{
    name: "first_name", type: "input",
    message: "What is their first name?",
    },{
    name: "last_name", type: "input",
    message: "What is their last name?",
    },{
    name: "role_id", type: "input",
    message: "What is the id of their role?",
}]

const roleUpdateQuestions = [{
    name: "employee_id", type: "input",
    message: "What is the employee ID of the employee you want to change?",
    },{
    name: "role_id", type: "input",
    message: "What is the role id of their new role?",
}]

//Inquirer here
function mainMenu() {
    inquirer
    .prompt([{
        name: "choice", type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Exit"
        ]
    }])
    .then((answers) => {
        switch (answers.choice) {
            case `View all departments`:
                viewAll(`departments`);
                break;
            case `View all roles`:
                viewAll(`roles`);
                break;
            case `View all employees`:
                viewAll(`employees`);
                break;
            case `Add a department`:
                addDepartment();
                break;
            case `Add a role`:
                addRole();
                break;
            case `Add an employee`:
                addEmployee();
                break;
            case `Update an employee role`:
                updateEmployeeRole();
                break;
            case `Exit`:
                process.exit();
        }
    })
    .catch((e) => {throw e})
};

function viewAll(table) {
    console.log(`Pulling all ${table}`);
    db.query(`SELECT * FROM ${table} ORDER BY id`, function (err, results) {
        if (err) {throw err};
        console.table(results);
        mainMenu();
    });
};

function addDepartment() {
    console.log(`Adding a new department`);
    inquirer.prompt(departmentQuestions)
    .then((answers) => {
        db.query(`INSERT INTO departments (department_name) VALUES ("${answers.name}")`, function (err, results) {
            if (err) {throw err};
            mainMenu();
        });
    })
};

function addRole() {
    console.log(`Adding a new role`);
    inquirer.prompt(roleQuestions)
    .then((answers) => {
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES ("${answers.title}", ${answers.salary}, ${answers.department_id})`, function (err, results) {
            if (err) {throw err};
            mainMenu();
        });
    })
};

function addEmployee() {
    console.log(`Adding a new employee`);
    inquirer.prompt(employeeQuestions)
    .then((answers) => {
        db.query(`INSERT INTO employees (first_name, last_name, role_id) VALUES ("${answers.first_name}", "${answers.last_name}", ${answers.role_id})`, function (err, results) {
            if (err) {throw err};
            mainMenu();
        });
    })
};

function updateEmployeeRole() {
    console.log(`Adding a new employee`);
    inquirer.prompt(roleUpdateQuestions)
    .then((answers) => {
        db.query(`UPDATE employees SET role_id = ${answers.role_id} WHERE id = ${answers.employee_id}`, function (err, results) {
            if (err) {throw err};
            mainMenu();
        });
    })
};

mainMenu();