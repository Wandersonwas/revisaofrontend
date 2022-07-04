//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando usamos para ver nossos repositorios remotos ?");
  if ((nome == "git remote -v")) {
    alert("" + nome + ", serve para iniciar o git. Parabéns você acertou!");
    

  }else {
    alert( ""+nome + " !!!! Perdeu tudo Retorne ao Inicio !!!!!!");
    window.location="aula1comandos.html";
  }
  window.location="index.html";
};