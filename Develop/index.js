
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown")

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "projecturl",
        message: "What is your github project url?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a shoort description of your project."
    },
    {
        type: "input",
        name: "license",
        message: "Does your project require or have a license?"
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run test?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does a user need to know to use this project?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does a user need to know about contributing to this project?"
    },



];

function writeToFile(fileName, data) {
    const file = fs.writeFileSync (path.join(process.cwd(), fileName),data);
    return file;
}

function init() {
inquirer.prompt(questions).then(response => {
writeToFile("README.md",generateMarkdown(response));

})

}

init();



