"use strict"

class Animal {

	morrer() {
		console.log('morrer');
	}
}

class Mamifero extends Animal {

	mamar() {
		console.log('mamar');
	}
}

class Leao extends Mamifero {

	ruge() {
		console.log('ruge');
	}
}

class Golfinho extends Mamifero {
}

class Orca extends Golfinho {
}

class Morcego extends Mamifero {
}

class Reptil extends Animal {
}

class Cobra extends Reptil {

	alimentar(comida) {
		console.log('alimentar');
	}
}

class Cascavel extends Reptil {

	alimentar(comida) {
		console.log('alimentar');
	}
}

class Jacara extends Reptil {
}
