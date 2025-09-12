//classe -> forma para fazer bolos 
class formaDeBolo{
	constructor(saborDaMassa, saborRecheio){
		this.saborDaMassa = saborDaMassa
		this.saborRecheio = saborRecheio
    }

/* não precisa escrever 'function' para criar esta função dentro da classe*/	
// método -> 
	escrever(){
		console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}.`)
	} 
}

//objeto -> surge a partir do uso da classe
let boloFesta = new formaDeBolo("chocolate", "Nutella") //cria o objeto 'boloFesta' com os parâmetro informados
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever() // usa o método 'escrever'< a função 'escrever' > dentro da classe método para fazer o console.log
boloPremium.escrever()

// Por que usam tanto classes? Porque é uma forma padronizada de criar funções úteis em todo o projeto.
