const entrada1 = prompt("Informe o primeiro numero: ");
const entrada2 = prompt("Informe o segundo numero: ");

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y;
const subtracao = x - y;
const multplicacao = x * y;
const divisao = x / y;

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtracao: " + subtracao +
    "\nMultplicacao: " + multplicacao +
    "\nDivisao: " + divisao
);