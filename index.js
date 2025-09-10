    /*" 1️⃣ Desafio Classificador de nível de Herói
    **O Que deve ser utilizado**
    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões
    ## Objetivo 
    Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
    Se XP for menor do que 1.001 = Ferro
    Se XP for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 5.001 e 7.000 = Ouro
    Se XP for entre 7.001 e 8.000 = Platina
    Se XP for entre 8.001 e 9.000 = Ascendente
    Se XP for entre 9.001 e 10.000= Imortal
    Se XP for maior ou igual a 10.001 = Radiante
    ## Saída
    Ao final deve se exibir uma mensagem:
    "O Herói de nome **{nome}** está no nível de **{nivel}**"
    Bons estudos 😉 */


    let nomeDoHeroi = prompt("Digite o nome do seu herói: ")
    let nivel = ""
    let xp = prompt("Digite quantidade de experiência (XP) do seu herói: ")

    // procurar como inserir o equivalente do JS para o < f'() > do Python
    // No JS é usar crase ao invés de aspas

    //          Como o Objetivo não contemplava a possibilidade de ter XP entre 1000 e 1001, mudei a primeira condição para 'menor que 1001'. O mesmo vale para 10000 e 10001.
    switch (true){
        case (xp >= 0 && xp < 1001):
        nivel = "Ferro"
        break

        case (xp <= 2000):
        nivel = "Bronze"
        break

        case (xp <= 5000):
        nivel = "Prata"
        break

        case (xp <= 7000):
        nivel = "Ouro"
        break

        case (xp <= 8000):
        nivel = "Platina"
        break

        case (xp <= 9000):
        nivel = "Ascendente"
        break

        case (xp <= 10000):
        nivel = "Imortal"
        break

        case (xp > 10000):
        nivel = "Radiante"
        break
        
        default:
        console.log("A quantidade de experiência (XP) informada é menor que zero.")
    }

    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}.`)