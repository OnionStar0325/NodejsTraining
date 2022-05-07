const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i=0; i <= 10000000; i++) {
	file.write('Hello. Now we makes some big files. You should fasten seat belt LOL.\n');
	file.write(`I'm not kidding. It is serious`);
}
file.end();
