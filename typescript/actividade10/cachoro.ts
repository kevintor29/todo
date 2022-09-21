import { Animal } from "./animal";

export class Cachorro extends Animal{
    raca: string;
    cor: string;

    constructor(
        raca: string,
        cor: string,
        especie: string,
        idade: number,
        familia: string,
        nome: string
    ){
       super(especie, idade, familia, nome)
       this.raca = raca 
        this.cor = cor 
    }

    correr(){
        console.log("Correndo igual um cachorro");
    }


    sound(): void {
        console.log("o cachoro faz\n auau")
    }


}