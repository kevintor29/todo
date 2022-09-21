 export class cliente {
     nome: string
     sobrenome :string
     telefone : string
     numuser :string
    constructor(nome:string,sobrenome :string,telefone : string, nuser :string) {
        this.nome= nome 
        this.sobrenome= sobrenome      
        this.telefone= telefone
        this.numuser= nuser
    }
    mostrarnome(){
        console.log(`o nome do cliente é : ${this.nome}`)
    }
    mostrarnumuser(){
        console.log(`o numero de usuario do cliente é : ${this.numuser}`)
    }

 }