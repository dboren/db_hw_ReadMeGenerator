// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = ["What will be the title of this document?", "Please enter a description of the project.", "What will be in the table of contents?", "How is this app installed?", "How is this app used?", "Which license does this app use?", "Who contributed to this project?", "How can we contact you with additional questions?"];

const prompts = [{
    type: 'input',
    name: 'title',
    message: questions[0]
},
{
    type: 'input',
    name: 'description',
    message: questions[1]
},
{
    type: 'input',
    name: 'contents',
    message: questions[2]
},
{
    type: 'input',
    name: 'install',
    message: questions[3]
},
{
    type: 'input',
    name: 'use',
    message: questions[4]
},
{
    type: 'input',
    name: 'license',
    message: questions[5],
},
{
    type: 'input',
    name: 'contributors',
    message: questions[6]
},
{
    type: 'input',
    name: 'contact',
    message: questions[7]
}

];

// console.log("First question: " + questions[0]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("writeToFile");
    console.log(data);
    // const fileName = `README.md`
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
      
        // return fileName;
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(prompts)
        .then((data) => {writeToFile("README.md", generateMarkdown({...data}))
        
        }) 
        // .then((data) => {
        //     writeToFile(data);
        // })
        // console.log("data: " + data);
        // .then(writeToFile());
        // console.log("data: " + data);
        // console.log(generateMarkdown);

}

// Function call to initialize app
init();
