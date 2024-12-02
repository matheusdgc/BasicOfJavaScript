let opcao = ""

do { 
    opcao = prompt (
        "Seja bem-vindo(a)\n" +
        "\n1. Opcao Um" +
        "\n2. Opcao Dois" +
        "\n3. Opcao Tres" +
        "\n4. Opcao Quatro" +
        "\n5. Encerrar"
    )

    switch (opcao) {
        case "1":
            alert("Voce escolheu a opcao 1")
            break
    }


} while (opcao !== "5")