//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button2 = document.querySelector("button");

button.onclick = function () {
  var nome2 = prompt("Qual é o comando para iniciar o git?");
  if ((nome2 == "git init")) {
    alert("O" + nome2 + ", serve para iniciar o git. Parabéns você acertou!");

  }else {
    alert("O " + nome2 + ", não e o comando correto , tente outra vez!");
  }
  window.location="aula3.html";
};