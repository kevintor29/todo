programa
{
//exercicio 1/2 para
/*2- Desenvolver um sistema que efetue a soma de todos os números ímpares que são
múltiplos de três e que se encontram no conjunto dos números de 1 até 500.
 */
	
	funcao inicio()
	{
	inteiro soma=0,numero=0,x
	para(x=1;x<=500;x++){
		se(x %2 !=0 e x%3==0)
		{
			escreva("\n o multiplo de 3 e = ",x)
			//escreva(soma," + ",x," ) = ")
			soma=x+soma
			//escreva("",soma)
			}
			
		}
		escreva ("\n \n A somatoria de os numeros impares ate 500 e = ",soma,"\n \n \n")
	
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 34; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */