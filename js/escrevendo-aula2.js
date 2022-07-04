//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando clonar um repositorio?");
  if ((nome == "git clone")) {
    alert("" + nome + ", serve para iniciar o git. Parabéns você acertou!");

  }else {
    alert( ""+ nome + ", não e o comando correto , tente outra vez!");
    return
  }
  window.location="aula3.html";
};