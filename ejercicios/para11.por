programa
{
	
	funcao inicio()
	{
		inteiro s, f, ft = 0, st= 0, ms = 0
      real mc = 0.0
      para(inteiro i = 1; i <= 20; i++) {
          escreva("Digite o seu Salário aqui: ")
          leia(s)
          escreva("Digite seu número de filhos: ")
          leia(f)
          st = st + s
          ft = ft + f
          se(s > ms){
              ms = s
          }
          se(s <= 100){
              mc++
          }
      }
      escreva("O maior salário é: ", ms)
      escreva("A média de filhos é: ", ft/20)
      escreva("A média do salário é: ", st/20)
      escreva("Percentual de pessoas com salário até R$ 100: ", (mc/20)*100, "%")
    }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 657; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */