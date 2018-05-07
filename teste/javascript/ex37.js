"use strict"

class Item {
	constructor(nome, preco, quantidade) {
		this.nome = nome;
		this.preco = preco;
		this.quantidade = quantidade;
	}

	get nome() {
		return this.nome;
	}
	get preco() {
		return this.preco;
	}
	get quantidade() {
		return this.quantidade;
	}

	set nome(nome) {
		this.nome = nome;
	}
	set preco(preco) {
		this.preco = preco;
	}
	set quantidade(quantidade) {
		this.quantidade = quantidade;
	}
}

class Cliente {
	constructor(nome, estado) {
		this.nome = nome;
		this.estado = estado;
	}

	get nome() {
		return this.nome;
	}
	get estado() {
		return this.estado;
	}

	set nome(nome) {
		this.nome = nome;
	}
	set estado(estado) {
		this.estado = estado;
	}
}

class Compra {
	constructor(cliente, items) {
		this.cliente = cliente;
		this.items = items;
	}

	get cliente() {
		return this.cliente;
	}
	get items() {
		return this.items;
	}

	set cliente(cliente) {
		this.cliente = cliente;
	}
	set items(items) {
		this.items = items;
	}
}

function freteRestante(qtd) {
	return 25;
}

function freteSP(qtd) {
	if (qtd <= 3)	return 10;
	return 17;
}

function freteRJ(qtd) {
	if (qtd <= 4)	return 11;
	return 15;
}

function freteSul(qtd) {
	return 22;
}

function estadoSul(estado) {
	return true;
}

class Frete {
	calcula(compra) {
		let i = 0;
		let qtd = 0;
		let items = compra.items;
		let cliente = compra.cliente;

		for (i = 0; i < items.length; i++)
			qtd += items[i].quantidade;

		if (cliente.estado === 'SP')
			return freteSP(qtd);
		else if (cliente.estado === 'RJ')
			return freteRJ(qtd);
		else if (estadoSul(cliente.estado) === true)
			return freteSul(qtd);
		else
			return freteRestante(qtd);
	}
}

class Desconto {
	calcula(compra) {
		let i = 0;
		let total = 0;
		let items = compra.items;
		let desc = 0;

		for (i = 0; i < items.length; i++)
			total += items[i].quantidade * items[i].preco;

		if (total <= 500) {
			desc = 0.05;
		} else if (total <= 2000) {
			desc = 0.10;
		} else {
			desc = 0.15;
		}

		return preco * desc;
	}
}
