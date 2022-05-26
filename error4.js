process.on('uncaughtException', (err) => {
	console.error('Unexpected Error', err);
});

setInterval(() => {
	throw new Error('Occur Error');
}, 1000);

setTimeout(() => {
	console.log('running');
}, 2000);
