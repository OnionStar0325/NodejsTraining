const fs = require('fs');

console.log('start');
fs.readFile('./readme2.txt', (err, data) => {
	if (err) {
		throw err;
	}

	console.log('no.1', data.toString());

	fs.readFile('./readme2.txt', (err, data) => {
		if (err) {
			throw err;
		}
		
		console.log('no.2', data.toString());

		fs.readFile('./readme2.txt', (err, data) => {
			if (err) {
				throw err;
			}

			console.log('no.3', data.toString());
		});
	});
});

