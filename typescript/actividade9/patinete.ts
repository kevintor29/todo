export class patinete {
    nome: string;
    tipo: string;
    tamano: string;
    marca: string;

    constructor(
        nome: string,
        tipo: string,
        tamano: string,
        marca: string
    ) {
        this.nome = nome
        this.tipo = tipo
        this.tamano = tamano
        this.marca = marca
    }
    verdados() {
        console.log(`O nome do patinete é: ${this.nome}, \nO tipo é: ${this.tipo}, \na marca é: ${this.marca}, \nE seu tamano é: ${this.tamano}`)
    }
   
}