class base {
	x: number;
	name: string;

	constructor(x: number, name: string) {
		this.x = x;
		this.name = name;
	}

	go(): void {
		console.log('X: ' + this.x + ' Name: ' + this.name);
	}
}

let bs = new base(10, 'Hello');
bs.go();
