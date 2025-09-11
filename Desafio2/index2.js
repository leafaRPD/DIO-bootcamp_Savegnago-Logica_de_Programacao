/* # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**
- Variáveis -> let wins, let losses, var
- Operadores -> +-/*
- Laços de repetição -> for, while, do..while, forEach() <são métodos para arrays>
- Estruturas de decisões -> if/else, else if e switch
- Funções
## Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
## Saída
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

let wins = -1
let losses = -1
let nivel = ""

function calcWinRate(wins, losses){
    let winRate = wins-losses
    return winRate
}

wins = parseInt(prompt("Digite a quantidade de vitorias do jogador: "));
do  {
    console.log(`O usuário digitou o valor <${wins}> de vitórias. `);
    if (isNaN(wins) || wins<0){
        wins = parseInt(prompt("A quantidade de vitórias informada é inválida (não é um número maior ou igual a zero). \nDigite a quantidade de vitorias do jogador: "));
        console.log(`O usuário digitou o valor <${wins}> de vitórias. `);
        }
    }while (isNaN(wins) || wins<0);

losses = parseInt(prompt("Digite a quantidade de derrotas do jogador: "));
do  {
    console.log(`O usuário digitou o valor <${losses}> de derrotas. `);
    if (isNaN(losses) || losses<0){
        losses = parseInt(prompt("A quantidade de derrotas informada é inválida (não é um número maior ou igual a zero). \nDigite a quantidade de derrotas do jogador: "));
        console.log(`O usuário digitou o valor <${losses}> de derrotas. `);

        }
    }while (isNaN(losses) || losses<0);

let winRateResult = calcWinRate(wins, losses)

switch (true)  {
    case (winRateResult<=10):
    nivel = "Ferro"
    break

    case (winRateResult<=20):
    nivel = "Bronze"
    break

    case (winRateResult<=50):
    nivel = "Prata"
    break
    
    case (winRateResult<=80):
    nivel = "Ouro"
    break

    case (winRateResult<=90):
    nivel = "Diamante"
    break

    case (winRateResult<=100):
    nivel = "Lendário"
    break

    case (winRateResult>100):
    nivel = "Imortal"
    break
}


console.log(`O Herói tem de saldo de **${winRateResult}** está no nível de **${nivel}**!`)
