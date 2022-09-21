    //laços condicionais
        
    function exercicio1(){
        let Peso, Excedente, Multa;
        Peso = prompt("Qual o peso do tomate")
        if(Peso > 50){
          Excedente = Peso - 50
          Multa = Excedente * 4.00
         alert("A multa foi de " + Multa + " reais"+"\nO peso exedente e "+ Excedente+" quilos")
        }else{
            Excedente = 0
          Multa = 0
        alert("Peso dentro do acordo"+"\nO exedente e "+Excedente+"\nA multa e "+Multa)
         }
    }
    function exercicio2(){
        let   e=0, h=0,s=0,es=0
         h = prompt("Informe as horas que você trabalhou esse mês")
         if(h <= 50){
         s = h * 10
         alert("O valor a ser pago é " + s)
        }else{
        e = h - 50;
        es = e * 20;
        s = 500+ es;
         alert("O valor total é de " + s + "\nO valor exedente foi de " + es)
         }
    }
    function exercicio3(){
        let a, b, c , d, a2, b2, c2, d2
        a = prompt("Informe seu primeiro numero")
        b = prompt("Informe seu segundo numero")
        c = prompt("Informe seu terceiro numero")
        d = prompt("Informe seu quarto numero")
        a2 = a * a
        b2 = b * b
        c2 = c * c
        d2 = d * d
        if(c >= 1000){
            alert("O resultado ddo quadrado do terceiro numero é " + c)
        }else{
            alert("O quadrado de " + a + " é " + a2 + "\nO quadrado de " + b + " é " + b2 + "\nO quadrado de " + c + " é " + c2 + "\nO quadrado de " + d + " é " + d2)
        }
       
    }function exercicio4(){
        let numero
        numero = prompt("Digite um número: ");
        if(numero < 0 && numero % 2!=0){
        alert("O número é negativo e é ímpar");
        }
        if(numero > 0 && numero % 2==0){
            alert("O número é positivo e é par");
        }if(numero < 0 && numero % 2==0){
            alert("O número é negativo e é par");
        }
        if(numero > 0 && numero % 2!=0){
            alert("O número é positivo e é ímpar");
        }
    }function exercicio5(){
        let np
      np = prompt("Informe o nivel de poluição atual")
        if(np == 0.3){
    alert("Industrias do grupo 1, parem suas atividades")
         }if(np == 0.4){
    alert("Industrias dos grupos 1 e 2, parem suas atividaes")
        }if(np >= 0.5){
    alert("Industrias dos grupos 1, 2 e 3, parem suas atividades")
      }if(np < 0.3){
    alert("O nivel de polução esta ok")
       }
    }
    function exercicio6(){
        let idade
idade = prompt("Informe a sua idade, para saber sua classificação")
if(idade >= 5 && idade <= 7){
    alert("Infantil A")
}else if(idade >=8 && idade <= 11)
    alert("Infantil B")
else if(idade >= 12 && idade <= 13)
    alert("Juvenil A")
else if(idade >= 14 && idade <= 17)
    alert("Juvenil B")
else if(idade >= 18)
    alert("Adulto")
    }
    
    function exercicio7(){
        let altura, base, area, res
altura = prompt("Informe a altura do triângulo")
base = prompt("Informe a base do triângulo")
if(altura && base > 0){
    res = altura * base 
    area = res / 2
}alert("A área do triângulo é de " + area)
    }
    function exercicio8(){
        let n, r
n = prompt("Informe um numero")
if(n >= 100){
    alert("Escolha correta")
}else if(n < 100)
    alert("Escolha errada " + n + " = 0")
    }
    