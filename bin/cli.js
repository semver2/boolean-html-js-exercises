#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");
const exec = require('child_process').exec;
const basepath = process.cwd();
const { log } = console;
const environment = process.env.NODE_ENV || "default";
const startCommand = `(cd ${basepath}/node_modules/boolean-html-js-exercises/ && npm start)`;

const renderBanner = () => {
    const bannerOptions = {
        font: 'ANSI Shadow',
        verticalLayout: 'controlled smushing'
    };
    const words = [
        { text: 'Boolean', color: '#00EC9C' },
        { text: 'HTML JS', color: '#6E87F3' },
        { text: 'Exercises', color: '#1121AB' }
    ];
    words.forEach( word => {
        log(chalk.hex(word.color).underline(figlet.textSync(word.text, bannerOptions)));
    });
}
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
const logSteps = [
  {
    type: 'list',
    name: 'difficult',
    message: 'Select the exercises difficult level:',
    choices: ['easy', 'medium', 'hard'],
    default: ['medium']
  }
];

renderBanner();
inquirer.prompt(logSteps).then(processAnswers);
