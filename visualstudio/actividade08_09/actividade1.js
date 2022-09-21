//peso, nome, altura, data
//paciente é diabético 
let peso, nome ,altura,datad,diabe , sobrenome;

nome=prompt("escreva o nome da pessoa");
sobrenome=prompt("escreva o sobrenome da pessoa");
peso=prompt("escreva o peso da pessoa");
altura=prompt("escreva a altura da pessoa");
datad=prompt("escreva data de internaçao da pessoa");

/*document.write("o peso da pessoa é ",peso);
document.write("\n o nome da pessoa é ",nome);
document.write("\n o sobrenome da pessoa é ",sobrenome);
document.write("\n a altura da pessoa é ",altura);
document.write("\n a data de internaçao da pessoa é ",datad);*/
alert("o peso da pessoa é "+peso);
alert("\n o nome da pessoa é "+nome);
alert("\n o sobrenome da pessoa é "+sobrenome);
alert("\n a altura da pessoa é "+altura);
alert("\n a data de internaçao da pessoa é "+datad);

diabe=confirm("o pasciente é diabetico");
if(diabe==true){
    alert("\n O pasciente é diabetico");
}
else{
    alert("\n O pasciente não é diabetico");
}
alert("o tipo da variavel nome é "+typeof(nome));
alert("o tipo da variavel sobrenome é "+ typeof(sobrenome));
alert("o tipo da variavel peso é "+ typeof(peso));
alert("o tipo da variavel altura é "+ typeof(altura));
alert("o tipo da variavel datad é "+ typeof(datad));
alert("o tipo da variavel diabe é "+ typeof(diabe));