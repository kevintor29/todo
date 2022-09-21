import { Animal } from "./animal";

class elefante extends Animal {
    constructor(cor: string,
        especie: string,
        idade: number,
        familia: string,
        nome: string) 
        {
        super(especie, idade, familia, nome);
        }

}