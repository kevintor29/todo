export class productoelectronico{
nome: string;
codigo: string;
coor: string;
tamano: string;
producto: string;

constructor(
    nome: string,
    codigo: string,
    coor: string,
    tamano: string,
    producto: string,
) {
    this.nome = nome
    this.codigo = codigo
    this.coor= coor
    this.tamano= tamano
    this.producto=producto
    
}

verDados(){
    console.log(`O nome do producto é: ${this.nome}, \nO codigo da televisao é: ${this.codigo}, \ncoor da televisao é: ${this.coor}, \nas medidas da televisao é: ${this.tamano}`)
}
}