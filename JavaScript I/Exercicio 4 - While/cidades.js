const turista = prompt ("E ai, turista! Qual e o seu nome?")
let cidades = ""
let contagem = 0

let continuar  = prompt("Voce visitou alguma cidade? (Sim/Nao)")

while (continuar === "Sim") {
    let cidade = prompt ("Qual e o nome da cidade visitada?") 
    // cidades  = cidades + ...
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Voce visitou alguma outra cidade? (Sim/Nao)")
}

alert(
    "Turista: " + turista + 
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)