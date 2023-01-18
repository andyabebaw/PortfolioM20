// TODO: Include packages needed for this application
var fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "Enter a project description.",
    "Enter Installation Instructions",
    "Enter Usage Information.",
    "Enter the contributors",
    "Enter the tests",
    "Enter your github username.",
    "Enter your email address.",
    "Enter contribution guidelines."
];

const questionTitles = [
    "title",
    "description",
    "installation",
    "usage",
    "credits",
    "tests",
    "github",
    "email",
    "contribution"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

// TODO: Create a function to initialize app
function init() {
    var prompts = []
    for (var i =0 ; i < questions.length; i++){
        const prompt = {
           name: questionTitles[i],
           message: questions[i],
           type: 'input',
            }
        prompts.push(prompt)
    }
    var licensePrompt = {
        name: "license",
        message: "Please select a license.",
        type: "list",
        choices: ["MIT License", "GNU GPLv3"]
    }
    prompts.push(licensePrompt);
    inquirer.prompt([
        ...prompts
    ]).then(function (data) {
        console.log(data);
        writeToFile("README.md", generateMarkdown(data))
    });
   
}

// Function call to initialize app
init();
