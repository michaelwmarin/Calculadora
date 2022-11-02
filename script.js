var primeiroValor = parseInt(prompt("Digite o primeiro Valor"));
var segundoValor = parseInt(prompt("Digite o segundo valor"));
var operação = prompt(
  "Digite 1 para fazer uma divisã, 2 sobtração, 3 multiplicação, 4 somar"
);

if (operação == 1) {
  var resultado = parseInt(primeiroValor / segundoValor);
  document.write(
    "<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operação == 2) {
  var resultado = parseInt(primeiroValor - segundoValor);
  document.write(
    "<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operação == 3) {
  var resultado = parseInt(primeiroValor * segundoValor);
  document.write(
    "<h2>" + primeiroValor + " X " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operação == 4) {
  var resultado = parseInt(primeiroValor + segundoValor);
  document.write(
    "<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>"
  );
} else {
  document.write("<h3>Operação Invalida</h3>");
}

//escrevendo na tela - document.write()
//concatenação (juntar palavra com variáveis) - ("palavra" + variavel)
//is é se
//else é senão
//else if senão se
