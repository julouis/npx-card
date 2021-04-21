#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const terminalImage = require('terminal-image');

data = {
    name: chalk.blue("Julien Louis"),
    work: "Junior at BeCode.org",
    gitHub: "https://github.com/julouis",
    linkedIn: "https://www.linkedin.com/in/julien-louis/"
};


(async (image) => {
    image = await terminalImage.file('petit-poney-resize.jpg', {width:'50%', height: '50%'});
    console.log(image);
})();



console.log(
    boxen(
        [
            `${data.name}`,
            "",
            `${chalk.underline("Work")}: ${data.work}`,
            `${chalk.underline("GitHub")}: ${data.gitHub}`,
            `${chalk.underline("LinkedIn")}: ${data.linkedIn}`,
            
        ].join("\n"),
        {padding: 3, margin: 3, borderStyle: 'double', borderColor: 'cyan'}))



