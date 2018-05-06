var a = {id: 123, name: 'fda'};

function fatorial(n) {
	var ret = 1;
	for (var i = 1; i <= n; i++) {
		ret *= i;
	}
	return ret;
}

console.log(a.id + " " + a.name)

const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


var fat;
rl.on('line', (input) => {
	console.log("Fat[" + input + "] = " + fatorial(input));
	rl.close();
});
