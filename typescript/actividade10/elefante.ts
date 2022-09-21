import { Animal } from "./animal";

export class elefante extends Animal {
    constructor(cor: string,
        especie: string,
        idade: number,
        familia: string,
        nome: string) 
        {
        super(especie, idade, familia, nome);
        }
        sound(): void {
            console.log("o elefante faz \nuhhhhhffffuuhhhh");
        }
}