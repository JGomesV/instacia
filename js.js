class motor{
    constructor(p,a){
        document.write("O motor está em funcionamento:     ")
        this.potenciadomotor = p 
        this.aceleracaomotor = a 
    }

    aceleracao(){
        document.write("vruuumm!!!! <br>")
    }
}
class players{
    constructor(mecanico, pilotos, tecnicos){
        this.mecanico= mecanico
        this.pilotos= pilotos
        this.tecnicos= tecnicos
    }
    name(){
        this.mecanico, this.piloto, this.tecnico = window.prompt("Digite seu nickname:")
        document.write("My nickname "+this.mecanico+"<br>")
    }
}
class carro{
    constructor(cor, velocidade, durabilidade, preco){
        this.cor= cor
        this.velociade= velocidade
        this.durabiliade =durabilidade
        this.preco= preco
    }
    corloracao(){
    this.cor = window.prompt("Digite a cor do seu carro?")
    document.write("A cor do carro será "+ this.cor+"<br>")
    }
    valor(){
        this.preco = window.prompt("Escolha o valor do seu carro: 20000R$ ou 80000R$ <br>")
        if (this.preco===20000){
            document.write= ("Seu carro é ruim")
        }
        if (this.preco===80000){
            document.write= ("Seu corro é o melhor")
        }
        if(this.preco!== 20000 || this.preco!==8000){
            document.write("Esse carro não existe")
        }
    }

}
let y=new motor().aceleracao()
let s= new carro().corloracao()
let x= new players().name()
let v= new carro().valor()