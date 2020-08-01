const fs = require('fs');

const text = fs.readFileSync('./txt/input.txt', 'utf8');
console.log(text);

const textOutput = `This is what I know about avocados: ${text}.\n created on ${new Date()}`;
fs.writeFileSync('./txt/output.txt', textOutput);
console.log('Created textOutput file');