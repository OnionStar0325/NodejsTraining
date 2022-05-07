const fs = require('fs');

const writeStream = fs.createWriteStream('./writeMe2.txt');
writeStream.on('finish', () => {
	console.log('File has been written');
});

writeStream.write('write this.\n');
writeStream.write('write again.');
writeStream.end();
