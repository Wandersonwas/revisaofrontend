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
    alert("O" + nome + ", serve para iniciar o git. Parabéns você acertou!");

  }else {
    alert("O " + nome + ", não e o comando correto , tente outra vez!");
  }
  window.location="index.html";
};