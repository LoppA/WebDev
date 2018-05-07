"use strict"

class Conta {
	constructor(agencia, nroConta, saldo) {
		this.agencia = agencia;
		this.nroConta = nroConta;
		this.saldo = saldo;
	}

	depositarCheque(val) {
		this.saldo += val;
	}

	depositarDinheiro(val) {
		this.saldo += val;
	}

	verSaldo() {
		return this.saldo;
	}
}

class contaPoupanca extends Conta {
	constructor(agencia, nroConta, saldo, diaDeposito) {
		super(agencia, nroConta, saldo);
		this.diaDeposito = diaDeposito;
	}

	verLucro() {
		return this.saldo;
	}
}

class Cliente extends contaPoupanca {
	constructor(agencia, nroConta, saldo, diaDeposito, CPF, nome, Telefone) {
		super(agencia, nroConta, saldo, diaDeposito);
		this.CPF = CPF;
		this.nome = nome;
		this.Telefone = Telefone;
	}

	mostrarCPF() {
		return this.CPF;
	}

	verSaldo(val) {

	}
}

let clt = new Cliente(123, 123, 1000, '01/04/2018', 42312312, 'teste', '+32(32)23123131231');

console.log(clt.mostrarCPF());
