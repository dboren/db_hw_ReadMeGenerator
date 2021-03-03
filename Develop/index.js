// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["What will be the title of this document?", "Please enter a description of the project.", "What will be in the table of contents?", "How is this app installed?", "How is this app used?", "Which license does this app use?", "Who contributed to this project?", "How can we contact you with additional questions?"];

// console.log("First question: " + questions[0]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0]
            }
        ])
}

// Function call to initialize app
init();
