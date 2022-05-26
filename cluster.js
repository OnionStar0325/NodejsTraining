const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`Master Process ID: ${process.pid}`);
	// forks worker equals to CPUs
	for (let i = 0; i < numCPUs; i += 1) {
		cluster.fork();
	}
	// when worker has been ended
	cluster.on('exit', (worker, code, signal) => {
		console.log(`processor ${worker.process.pid} has been ended`);
		console.log('code', code, 'signal', signal);
		cluster.fork();
	});
} else {
	// Workers listening on port
	http.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		res.write('<h1>Hello Node!</h1>');
		res.end('<p>Hello Cluster!</p>');
		setTimeout(() => { // For checking worker exsition
			process.exit(1);
		}, 1000);
	}).listen(8080);

	console.log(`Forks ${process.pid}`);
}

