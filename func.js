const { odd, event } = require('./var');

function checkOddOrEven(num) {
	if (num % 2) {
		return odd;
	}
	return event;
}

module.exports = checkOddOrEven;