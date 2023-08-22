//Construa uma classe Pessoa, contendo algumas propriedades, como nome, idade e sexo e um método apresenta(), que exiba uma mensagem de apresentação com os dados desta pessoa.

class Pessoa {
    nome;
    idade;
    sexo;

    apresentar() {
        console.log(
            "Olá! Meu nome é " + this.nome + ", tenho " + this.idade + " anos e meu sexo é " + this.sexo
        );
    }
}

let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();

pessoa1.nome = "Kauanne";
pessoa1.idade = 18;
pessoa1.sexo = "feminino"

pessoa2.nome = "Pedro";
pessoa2.idade = 17;
pessoa2.sexo = "masculino"

pessoa1.apresentar();
pessoa2.apresentar();