const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('Pasword').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('Password').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('Another Password').digest('base64'));
