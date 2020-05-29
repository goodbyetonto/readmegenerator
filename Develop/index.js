const fs = require("fs"); 
const path = require("path"); 
const inquirer = require("inquirer"); 
const markdown = require("./utils/generateMarkdown"); 
const writeFileAsync = util.promisify(fs.writeFile); 


const questions = [
    function askUser() {
        return inquirer.prompt([
            {
                type: "input",
                name: "ghUn",
                message: "What is your Github username?"
            },
            {
                type: "input",
                name: "ghemail",
                message: "What is your Github email address?"
            },
            {
                type: "input",
                name: "projUrl",
                message: "What is the Github project URL?"
            },
            {
                type: "input",
                name: "projName",
                message: "What is your Github project name?"
            },
            {
                type: "input",
                name: "projDesc",
                message: "Briefly describe this project:"
            },
            {
                type: "list", 
                message: "What license did you use on this project?",
                name: "license", 
                choices: [
                    "MIT", 
                    "BSD 3.0",
                    "APACHE 2.0",
                    "GPL 3.0", 
                    "NONE", 
                ]
            }
        ])
    }
];



function writeToFile(fileName, data) {
}

async function init() {

}

init();
