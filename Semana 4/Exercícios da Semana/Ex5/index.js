class Person {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    apresentar(){
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura`)
    }
}

//const pessoaTeste = new Person ("Thiago", "36", "1.79")

//console.log(pessoaTeste.apresentar())

class Worker extends Person{
    constructor(nome, idade, altura, profissao){
       super(nome, idade, altura)
        this.profissao = profissao

    }
    apresentar(){
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}`)}
}

const newWorker = new Worker("Fulano", "30", "1.80", "Trabalhador")


newWorker.apresentar()