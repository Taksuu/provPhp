<?php
require_once "Pessoa.php";
require_once "Professor.php";
require_once "Aluno.php";

 $pessoa = new Pessoa("Carlos", "17");

 echo $pessoa->getNome() . "<br>";
 echo $pessoa->getIdade() . "<br>";
 echo $pessoa->falar();


 $aluno = new Aluno ("Pedro", "18");

 echo $aluno->getNome() . "<br>";
 echo $aluno->getIdade() . "<br>";
 echo $aluno->falar();

 
 $professor = new Professor ("Joao", "18");

 echo $professor->getNome() . "<br>";
 echo $professor->getIdade() . "<br>";
 echo $professor->falar();
?>
