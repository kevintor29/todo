programa
{
/*pregunta 1 : os nomes das variaveis ou tipo de variaveis sao
	 * enteiro, real,booleano,funçao,objeto,string,caracter.
	 * pregunta2: os nomes das variaveis podem se confundir com açao ou definiçao dos objetos 
	 * por isso o codigo da error e o computo nao entendi o que ele vai fazer.
	 */
	//o primeiro exercicio
	
	funcao inicio()
	
	{
	//exercicio 1
	real producto,porcento,total
		escreva("escreva preço do producto \n")
		leia (producto)
		escreva("escreva a porcentagem do acrescimo \n")
		leia (porcento)
		total =producto*(porcento/100)+producto
		escreva("o valor do producto e:",total)


		//exercico 2 
		real valor
		escreva ("\n \n o valor do deposito e:")
		leia(valor)
		escreva("\nR$",valor,"\n apos um mes da R$ =",valor*1.007)

		//exercicio 3
          real dolar,rial,calculo
          escreva("\n \n escreva o valor do dolar no brasil ")
		leia (dolar)
		escreva("\n escreva a quantidade de real ")
		leia (rial)
		calculo=rial*dolar
		escreva("\n o valor em reais e : ",calculo)

		//exercicio 4
		cadeia aluno
		real nota1,nota2,nota3,media
		escreva("\n \n escreva o nome do aluno ")
		leia(aluno)
		escreva("\n escreva a nota da primeira prova ")
		leia(nota1)
		escreva("\n escreva a nota da segunda prova ")
		leia(nota2)
		escreva("\n escreva a nota da terceira prova ")
		leia(nota3)
		media=(nota1+nota2+nota3)/3
		escreva("\n escreva a meia das provas do aluno ",aluno," é ",media,"\n \n")
		
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1433; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */