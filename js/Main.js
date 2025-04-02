import { Pessoa } from  "./Pessoa.js";
import { Aluno} from  "./Aluno.js";
import { Professor} from  "./Professor.js";

let pessoa = new Pessoa("João" , 25 );
let professor = new Professor ("Carlos", 18)
let aluno = new Aluno ("Pedro", 22);

console.log(pessoa.getNome()); 
console.log(pessoa.getIdade()); 
console.log(pessoa.falar()); 

console.log(professor.getNome()); 
console.log(professor.getIdade()); 
console.log(professor.falar()); 

console.log(aluno.getNome()); 
console.log(aluno.getIdade()); 
console.log(aluno.falar()); 


