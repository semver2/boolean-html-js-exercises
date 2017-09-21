#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");
const exec = require('child_process').exec;
const basepath = process.cwd();
const cliBanner = chalk.green(
  figlet.textSync('Boolean HTML JS Exercises', { horizontalLayout: 'full' })
);
const { log } = console;
const environment = process.env.NODE_ENV || "default";
const startCommand = `(cd ${basepath}/node_modules/boolean-html-js-exercises/ && npm start)`;
const processAnswers = (answers) => {
    log(answers);
    if(environment === "default") {
        fs.stat(`${basepath}/exercises`, findExercisesFolder);
    } else {
        exercisesExecutor(`(cd ${basepath} && npm run dev)`);
    }
};
const exercisesExecutor = (command) => {
    //@TODO Add library for manage shell commands instead use exec module
    const initializer = exec(command);
    initializer.stdout.on('data', (data) => console.log("stdout", data));
    initializer.stderr.on('data', (data) => console.log("stderr", data));
};
const findExercisesFolder = (err, stats) => {
    //@TODO Improve the way that the directory paths was defined and the way for execute the start command
    let initializer;
    if(err) {
        const sourceSnippetsPath = `${basepath}/node_modules/boolean-html-js-exercises/exercises`;
        const destSnippetsPath = `${basepath}/exercises`;
        exercisesExecutor(`cp -r ${sourceSnippetsPath} ${destSnippetsPath} && ${startCommand}`);
    } else {
        exercisesExecutor(startCommand);
    }
};
const main = (() => {
    const logSteps = [
      {
        type: 'list',
        name: 'difficult',
        message: 'Select the exercises difficult level:',
        choices: ['easy', 'medium', 'hard'],
        default: ['medium']
      }
    ]
    log(cliBanner);
    inquirer.prompt(logSteps).then(processAnswers);
})();
