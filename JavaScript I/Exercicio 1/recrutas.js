const primeiroNome = prompt ("Informe o nome do recruta: ");
const sobrenome = prompt("Informe o sobrenome do recruta: ");
const campoDeEstudo = prompt ("Qual e o campo de estudo do recruta? ");
const anoDeNascimento = prompt ("Qual e o ano de nascimento do recruta? ");

alert(
    "Recruta cadastrado com sucesso!\n" +
    "Nome completo: " + primeiroNome + " " + sobrenome + "\n" +
    "Campo de Estudo: " + campoDeEstudo + "\n" +
    "Idade: " + (2024 - anoDeNascimento)
);
