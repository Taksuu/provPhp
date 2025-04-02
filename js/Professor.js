import { Pessoa } from  "./Pessoa.js";

class Professor extends Pessoa {
    constructor(nome,idade) {
        super(nome,idade);
        this.nome = nome;
        this.idade = idade;
    }
     falar() {
        return "Dando Aula..."
     }
}

export { Professor };