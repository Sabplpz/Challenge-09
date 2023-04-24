// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Please enter project title"
    },
    {
        type: 'input',
        name: 'desc',
        message: "Please enter project description: "
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter installation instructions for the project: "
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please enter usage instructions for the project: "
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter test instructions for the project: "
    },
    {
        type: 'list',
        name: 'license',
        message: "Please select licence for this project",
        choices: ["GNU AGPLv3","GNU GPLv3","GNU LGPLv3","Mozilla Public License 2.0", "Apache 2.0","MIT","Boost Software License 1.0","The Unlicense"]
    },
    {
        type: 'input',
        name: 'credits',
        message: "Who should receive credits for this project? "
    },
    {
        type: 'input',
        name: 'links',
        message: "Please enter the link for the deployed site: "
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter your github username: "
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        writeToFile('./output/README.md', generateMarkdown({ ...res}));
    })
}

// Function call to initialize app
init();
