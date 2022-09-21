export class Contabanco {
    titular: string;
    agencia: string;
    conta: string;
    saldo: number;

    constructor(
        titular: string,
        agencia: string,
        conta: string,
        saldo: number
    ) {
        this.titular = titular
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }
    versaldo() {//metodo ou void
        console.log(`O saldo da sua conta ${this.saldo}`)
    }
    sacar(valor: number) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor
            console.log(`saque de R$ ${valor} realizado con sucesso`)
        } else {
            console.log(`saque de R$ ${valor} imposivel de ser realizado`)
        }
    }
    deposito(valor: number) {
        if (valor > 0) {
            this.saldo += valor
            console.log(`o valor do deposito e ${valor}`)
            console.log(`o saldo da sua conta e ${this.saldo}`)
        }else{
            console.log(`o deposito de R$ ${valor} impossivel de ser realizado`);
        }
    }

}