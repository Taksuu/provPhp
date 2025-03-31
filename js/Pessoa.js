class Pessoa {
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    nome() {
        return $(this.nome);
    }

    idade() {
        return $(this.idade);
    }

    falar() {
        return "Falando...."
    }

}