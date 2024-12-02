const numero = parseInt(prompt("Digite um numero para calcular a tabuada de 1 a 20: "));

let resultado = `\nTabuada do ${numero}:\n`;

for (let i = 1; i <= 20; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
}

alert(resultado);