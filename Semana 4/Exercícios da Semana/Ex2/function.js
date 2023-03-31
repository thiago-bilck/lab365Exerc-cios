class Conta {
    saldo;
    #senha;

    constructor(senha,saldo){
        this.#senha = senha
        this.saldo = saldo

    }

    deposito(senha, valor){
        if (senha === this.#senha){
            this.saldo += valor
            console.log(`O valor de ${valor} reais foi deoisitado com sucesso. Seu saldo é de ${this.saldo}`)
        }
        else{
            console.log("Senha inválida")
        }


    }

    retirada(senha, valor){
        if(senha === this.#senha){
            if (valor <= this.saldo){
                this.saldo -= valor
                console.log(`O valor de ${valor} reais foi retirado com sucesso. Seu saldo é de ${this.saldo}`)

            }
            else {
                console.log(`Saldo insuficiente`)

            }
        }
        else {
            console.log("Senha inválida")
        }

    }
}   

const contaCorrente = new Conta("123", 1000);

contaCorrente.deposito("123", 1000); // depósito efetuado com sucesso
contaCorrente.deposito("321", 1000); // mensagem de senha inválida

contaCorrente.retirada("123", 1000); // retirada feita com sucesso e o saldo voltou a 1000
contaCorrente.retirada("321", 1000); // mensagem de senha inválida
contaCorrente.retirada("123", 1001); // mensagem de saldo insuficiente
