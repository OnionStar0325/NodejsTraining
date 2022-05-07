const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i=0; i<=10000000; i++) {
    file.write('Hi all. now i create the huge file. fasten your seat belt please');
}
file.end();
