setInterval(() => {
	console.log('Start');
	try {
		throw new Error('Occur Error!');
	} catch (err) {
		console.error(err);
	}
}, 1000);
