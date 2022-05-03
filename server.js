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
                viewAllDept();
                console.log(`setting up a new department`);
                break;
            case `Add a role`:
                viewAllDept();
                console.log(`setting up a new role`);
                break;
            case `Add an employee`:
                viewAllDept();
                console.log(`setting up a new employee`);
                break;
            case `Update an employee role`:
                viewAllDept();
                console.log(`Changing the role of an employee`);
                break;
            case `Exit`:
                process.exit();
        }
    })
    .catch((e) => {throw e})
};

function viewAll(table) {
    console.log(`Pulling all ${table}`)
    db.query(`SELECT * FROM ${table} ORDER BY 'id'`, function (err, results) {
        if (err) {throw err};
        console.table(results);
        mainMenu();
    });
};


mainMenu();