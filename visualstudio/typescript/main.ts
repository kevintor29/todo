import { Pessoa } from "./src/pessoa";
 /*let pessoa1= new Pessoa();
 pessoa1.nome = "debora / pekky";
 pessoa1.cpf = "235.558.889-89";
 pessoa1.idade = 18;
 pessoa1.telefone = "(21)998-4564";


 console.log(`o nome da pessoa é: ${pessoa1.nome} ´);
*/
import { Contabanco } from "./src/contabanco";
let conta1 = new Contabanco("liza","005-4","002-52",500);         

conta1.versaldo();
conta1.deposito(500);
conta1.sacar(100);