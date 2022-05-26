const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
	cookie
		.split(';')
		.map(v => v.split('='))
		.reduce((acc, [k,v]) => {
			acc[k.trim()] = decodeURIComponent(v);
			return acc;
		}, {});
http.createServer(async (req, res) => {
	const cookies = parseCookies(req.headers.cookie);

	//url start with /login
	if (req.url.startsWith('/login')) {
		const { query } = url.parse(req.url);
		const { name } = qs.parse(query);
		const expires = new Date();
		// set valid cookie time as current time + 5 minutes
		expires.setMinutes(expires.getMinutes() + 5);
		res.writeHead(302, {
			Location: '/',
			'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
		});
		res.end();
	} else if (cookies.name) { // has cookie 'name'
		res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
		res.end(`Welcome ${cookies.name}`);
	} else {
		try{
			const data = await fs.readFile('./cookie2.html');
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			res.end(data);
		} catch (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end(err.message);
		}
	}
})
	.listen(8080, () => {
		console.log('Listening on port 8080');
	});
