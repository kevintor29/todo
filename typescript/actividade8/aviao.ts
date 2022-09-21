export class aviao {
    nome: string;
    codigo: string;
    coor: string;
    tamano: string;
   
    constructor(
        nome: string,
        codigo: string,
        coor: string,
        tamano: string,
    ) {
        this.nome = nome
        this.codigo = codigo
        this.coor= coor
        this.tamano= tamano
        
    }

    verDados(){
        console.log(`O nome do aviao é: ${this.nome}, \nO codigo do aviao é: ${this.codigo}, \ncoor do aviao é: ${this.coor}, \nE seu tamano é: ${this.tamano}`)
    }
}
    