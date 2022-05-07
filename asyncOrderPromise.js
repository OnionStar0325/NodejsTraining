const fs = require('fs').promises;

console.log('start');

fs.readFile('./readme2.txt')
	.then((data) => {
		console.log('no.1', data.toString());
		return fs.readFile('./readme2.txt');
	})
	.then((data) => {
		console.log('no.2', data.toString());
		return fs.readFile('./readme2.txt');
	})
	.then((data) => {
		console.log('no.3', data.toString());
		return fs.readFile('./readme2.txt');
	})
	.catch((err) => {
		console.error(err);
	});
