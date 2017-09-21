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
//console.log(path.basename(path.dirname(fs.realpathSync(__filename))));

console.log(cliBanner);

fs.stat(`${basepath}/exercises-sym`, function(err,stats){
    const startCommand = `(cd ${basepath}/node_modules/boolean-html-js-exercises/ && npm start)`;
    if(err) {
        const sourceSnippetsPath = `${basepath}/node_modules/boolean-html-js-exercises/exercises`;
        const symbolicSourceSnippetsPath = `${basepath}/exercises-sym`;
        initializer = exec(`ln -s ${sourceSnippetsPath} ${symbolicSourceSnippetsPath} && ${startCommand}`);
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
