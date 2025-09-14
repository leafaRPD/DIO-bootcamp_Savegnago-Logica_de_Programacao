//classe -> uma 'fôrma' para descrever carros
class carro{
	constructor(nomeCarro,potencia, massa, tracao, downforce, distribuicaoDePeso){
		this.nomeCarro = nomeCarro
        this.potencia=potencia
        this.massa=massa
        this.tracao=tracao
        this.downforce=downforce
        this.distribuicaoDePeso=distribuicaoDePeso
    }

/* não precisa escrever 'function' para criar esta função dentro da classe*/	
// método -> função que pertence à classe
	escrever(){
		console.log(`O carro ${this.nomeCarro} tem ${this.potencia}cv de potência e tracao ${this.tracao}. O downforce gerado é de ${this.downforce}kg. Pesando ${this.massa}kg, sua distribuição de peso é de ${this.distribuicaoDePeso}.`)
	} 
}

//objeto -> surge a partir do uso da classe
let subaru = new carro("Impreza", 230, 1450, "AWD", 50, "55/45") //cria o objeto 'subaru' com os parâmetro informados
let porsche = new carro("911", 450, 1550, "RR", 190, "40/60")
let honda = new carro("Civic", 200, 1350, "FWD", -10, "66/34")

porsche.escrever() // usa o método'escrever'<que é uma função>, constante dentro da classe, para fazer o console.log
subaru.escrever()

// Por que usam tanto classes? Porque é uma forma padronizada de criar funções úteis em todo o projeto.
