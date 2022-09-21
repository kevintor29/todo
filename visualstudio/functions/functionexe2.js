// 1 - Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.

// 2 - Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.

// 3 - Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.

// 4 - Criar uma função para calcular a porcentagem de um número

// 5 -  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

// 6 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.

function validadordeprompt(salario) {
    if(salario==undefined)
    {
      alert("Ha pulsado cancelar");
      confirmacion=confirm("deseja fechar o exercicio");
      if(confirmacion==true){return;}
    }/*else if(salario==""){
      alert("Ha pulsado aceptar con el campo vacio"); 
      confirmacion=confirm("deseja ingresar un valor \nou voce queer sair do exercicio"+
      "\nSi deseja colocar un valor presione (ok)\nSi deseja sair do exercio presione (cancelar)");
      if(confirmacion==true){
        
      }*/else{
        return(selec());
      }
}
function selec() {
    let exercicios=0;
    exercicios=parseInt(prompt("ingrese o exercicio desejado\n"+
    "utilizando numeros de 1 ao 6"));
    validadordeprompt(exercicios);
    switch (exercicios) {
        case 1:
            fun1()
        break;
        case 2:
              fun2()
            break;   
            case 3:
              fun3()
                break; 
                case 4:
                    fun4()
                    break; 
                    case 5:
                    fun5()
                        break; 
                        case 6:
                            fun6()
                            break;  
                             default:
                                 alert("ingrese un valor valido");
                              break;
    }
}
function fun1(){
alert("bem")
}
function fun2(){
    alert("bem")
}
function fun3(){
    alert("bem")
}
function fun4(){
    alert("bem")
}
function fun5(){
    alert("bem")
}
function fun6(){
    alert("bem")
}
selec()

