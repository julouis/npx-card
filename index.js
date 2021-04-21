#!/usr/bin/env node

const termImg = require('term-img');
const chalk = require('chalk');
const boxen = require('boxen');
const cliBoxes = require('cli-boxes');

content = {
    Name: "Julien Louis",
    Work: "Junior at BeCode.org",
    GitHub: "https://github.com/julouis",
    LinkedIn: "https://www.linkedin.com/in/julien-louis/"
};

console.log(
    boxen([
        `${content.Name}`,
        `${content.Work}`,
    ].join(NEWLINE),
        {padding: 3, margin: 3, borderStyle: 'double', borderColor: 'cyan'}))



