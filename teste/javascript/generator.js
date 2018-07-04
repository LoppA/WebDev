"use strict"

function* Fibonacci() {
	let a = 1;
	let b = 1;
	while(true) {
		let c = a+b;
		yield c;
		a = b;
		b = c;
	}
}

let fib = Fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
