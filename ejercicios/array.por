programa
{
	funcao inicio ()
	{
		
		inteiro salario[3],filhos[3],mediaf=0,x,medias=0
		inteiro maiors=0
		real porcen=0.0
		
		
		para(x=0;x<=2;x++){
		escreva("quanto é o salario da pessoa # ",x+1,"\n")
		leia(salario[x])
		escreva ("quantos filhos tein a pessoa # ",x+1,"\n")
		leia(filhos[x])
		se(medias==0 e x>0){
	
	    mediaf=filhos[x]+filhos[x-1]
		medias=salario[x]+salario[x-1]
		}
		senao se (x>0){
	
	    mediaf=filhos[x]+mediaf
		medias=salario[x]+medias
		}
		se(salario[x]<=100){
			porcen=porcen+1
		}
		se(x>0 e salario[x]>salario[x-1]){
			maiors=salario[x]
		}
		senao{
			maiors=salario[0]
		}
		}
		porcen=x*(porcen/10)
		mediaf=mediaf/x
		medias=medias/x
		escreva("a media salarial é = ",medias,"\n")
		escreva("a media dos filhos é = ",mediaf,"\n")
		escreva("o maior salario é = ",maiors,"\n")
		escreva("o porcentage das pessoas con salario ate 100 é = ",porcen,"%\n")
	
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 641; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */