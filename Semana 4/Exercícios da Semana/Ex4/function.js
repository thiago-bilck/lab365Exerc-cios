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


class ContaPoupanca extends Conta {
    
atualizaJuros(){
    this.saldo *= 1.07
}
}





const contaCorrente = new ContaPoupanca("123", 1000);

contaCorrente.deposito("123", 1000); // depósito efetuado com sucesso
contaCorrente.deposito("321", 1000); // mensagem de senha inválida

contaCorrente.retirada("123", 1000); // retirada feita com sucesso e o saldo voltou a 1000
contaCorrente.retirada("321", 1000); // mensagem de senha inválida
contaCorrente.retirada("123", 1001); // mensagem de saldo insuficiente

contaCorrente.atualizaJuros();
console.log(contaCorrente.saldo)



class ContaPoupancaPremium extends ContaPoupanca {
    atualizaJuros() {
      this.saldo *= 1.012;
    }
  }
  
const contaPoupancaPremium = new ContaPoupancaPremium("123", 1000);

contaPoupancaPremium.deposito("123", 1000);
contaPoupancaPremium.retirada("123", 1000);

contaPoupancaPremium.atualizaJuros();
console.log(contaPoupancaPremium.saldo); 
