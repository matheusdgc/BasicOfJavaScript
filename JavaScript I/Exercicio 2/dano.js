const atacante = prompt("Qual e o nome do atacante?")
const poderDeAtacaque = parseFloat(prompt("Qual e o seu poder de ataque?"))

const defensor = prompt("Qual e o nome do defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual e o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Nao)")

let danoCausado = 0

if (poderDeAtacaque > poderDeDefesa && possuiEscudo === "Nao"){
    danoCausado = poderDeAtacaque - poderDeDefesa
} else if (poderDeAtacaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtacaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)