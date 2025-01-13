import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
console.log(chalk.bgGreen('haha'));

// const fs = require('node:fs');
import fs from 'node:fs'
const content = 'Some content!';

fs.writeFile('./test.txt', content, err => {
    if (err) {
        console.error(err)
    } else {
        // file written successfully
    }
});
console.log(fs.readFile(test.txt));
