const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

//Inquirer here
function mainMenu() {
    prompt([{
        name: "choice", type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role"
        ]
    }])
}

mainMenu();