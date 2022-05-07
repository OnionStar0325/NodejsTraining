const path = require('path');

const string = __filename;


console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('---------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('---------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
	dir: '/home/bspark/projects/nodetest',
	name: 'path',
	ext: '.js',
}));
console.log('path.normalize():', path.normalize('/home/bspark/projects/nodetest/path.js'));

console.log('---------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('path.isAbsolute(/home):', path.isAbsolute('/home'));
console.log('---------------------------------');
console.log('path.relative():', path.relative('/home/bspark/projects/nodetest/path.js', '/'));
console.log('path.join():', path.join(__dirname, '..', '..', '/home', '.', '/bspark'));
console.log('path.relove():', path.resolve(__dirname, '..', 'home', '.', '/bspark'));


