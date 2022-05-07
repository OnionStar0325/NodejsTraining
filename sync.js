const fs = require('fs');

console.log('start');
let data = fs.readFileSync('./readme2.txt');
console.log('no.1', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('no.2', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('no.3', data.toString());
console.log('end');
