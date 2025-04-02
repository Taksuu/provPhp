import { Pessoa } from  "./Pessoa.js";


class Aluno extends Pessoa {
    constructor(nome,idade) {
        super(nome,idade);
        this.nome = nome;
        this.idade = idade;
    }
     falar() {
        return "Perguntando..."
     }
}

export { Aluno };