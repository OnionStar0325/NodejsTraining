const fs = require('fs').promises;

setInterval(() => {
	fs.unlink('./abdefg.js')
}, 1000);
