const veiculo1 = prompt("Informe o nome do primeiro veiculo: ")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veiculo: "))

const veiculo2 = prompt("Informe o nome do segundo veiculo: ")
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veiculo: "))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " e mais rapido do que " + veiculo2)
} else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " e mais rapido do que " + veiculo2) 
} else {
    alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.")
}