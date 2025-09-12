/*# 3️⃣ Escrevendo as classes de um Jogo
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos
## Objetivo:
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )
além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
## Saída
Ao final deve se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada                */
//classe -> uma 'fôrma' para descrever personagens
class Personagem{
	constructor(nome,idade, tipo){
		this.nome = nome
        this.idade = idade
        this.tipo = tipo //- tipo (ex: guerreiro, mago, monge, ninja)
    }

/* não precisa escrever 'function' para criar esta função dentro da classe*/	
// método atacar -> função que pertence à classe
    atacar(){
        let ataque = ""

        switch (this.tipo)  {
            case ("guerreiro"):
                ataque = "espada"
                break

            case ("mago"):
                ataque = "magia"
                break

            case ("monge"):
                ataque = "artes marciais"
                break
                
            case ("ninja"):
                ataque = "shuriken"
                break
        }
        
  		console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}

//objeto -> surge a partir do uso da classe
let gladiador = new Personagem("Julius", 28, "guerreiro") //cria o personagem <objeto> 'gladiador' com os parâmetros informados, que são: nome: Julius ; idade: 28 ; tipo: guerreiro

let alvin = new Personagem("Alvo Dumbledore", 532, "mago")

gladiador.atacar() // usa o método'atacar'<que é uma função> existente dentro da classe, para fazer o console.log
alvin.atacar()

// Por que usar Classes: porque é uma forma padronizada de criar funções úteis em todo o projeto.
