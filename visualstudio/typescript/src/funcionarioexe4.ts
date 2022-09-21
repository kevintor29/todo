export class Funcionario {
   nome:string
   idade: string
   ficha: String
    constructor(
        nome:string,
        idade: string,
        ficha: String
    ){
        this.nome=nome
        this.idade=idade
        this.ficha= ficha

    }

    verFuncionario(){
        console.log(`${this.nome}, ${this.idade}, ${this.ficha}, `)
    }
}