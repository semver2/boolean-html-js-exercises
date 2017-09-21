#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const figlet = require("figlet");
const exec = require('child_process').exec;
const basepath = process.cwd();
const cliBanner = chalk.green(
  figlet.textSync('Boolean HTML JS Exercises', { horizontalLayout: 'full' })
);
let initializer;

console.log(cliBanner);

fs.stat(`${basepath}/exercises`, function(err,stats){
    //@TODO Improve the way that the directory paths was defined and the way for execute the start command
    //@TODO Add library for manage shell commands instead use exec module
    const startCommand = `(cd ${basepath}/node_modules/boolean-html-js-exercises/ && npm start)`;
    if(err) {
        const sourceSnippetsPath = `${basepath}/node_modules/boolean-html-js-exercises/exercises`;
        const destSnippetsPath = `${basepath}/exercises`;
        initializer = exec(`cp -r ${sourceSnippetsPath} ${destSnippetsPath} && ${startCommand}`);
    } else{
        initializer = exec(startCommand);
    }
    initializer.stdout.on('data', function(data){
        console.log("stdout",data);
    });

    initializer.stderr.on('data', function(data){
        console.log("stderr",data);
    });
});
