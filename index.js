const inquirer = require("inquirer");
const mysql = require('mysql2');
const { exit } = require("process");
// const db = require("./db");
// require("console.table");

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
                viewAllDept();
                break;
            case `View all roles`:
                console.log(`pulling all roles`);
                break;
            case `View all employees`:
                console.log(`pulling all employees`);
                break;
            case `Add a department`:
                console.log(`setting up a new department`);
                break;
            case `Add a role`:
                console.log(`setting up a new role`);
                break;
            case `Add an employee`:
                console.log(`setting up a new employee`);
                break;
            case `Update an employee role`:
                console.log(`Changing the role of an employee`);
                break;
            case `Exit`:
                process.exit();
        }
    })
    .then(() => {
        mainMenu();
    })
    .catch((e) => {throw e})
};

function viewAllDept() {
    console.log(`pulling all departments`);
    
};

mainMenu();