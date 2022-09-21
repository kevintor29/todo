/*1 - Faça um Algoritmo que receba o preço de custo de um produto e  
mostre o valor da venda. sabe-se que o preço de custo receberá um 
acréscimo de acordo com um percentual informado pelo usuário 
*/
alert ("execicio 1");
let numero, porcen ,acrecimo,res
numero=prompt("escreva o preço do custo");
acrecimo=prompt("escreva um porcentagem");
porcen= parseInt(acrecimo)*(100/parseInt(numero));
res=parseInt(numero) + parseInt(porcen);
alert("o porcentage e:"+ parseInt(res));

/*2 - faça um algoritmo que receba um valor que foi depositado e exiba 
o valor com rendimento após um mês. considere fixo o juro da poupança
 em 0,70% a.m
 */
let valor , result;
alert("exercicio 2");
valor=prompt("escreva o valor do deposito");
result= parseInt(valor)*(0.70/100)
result=result+parseInt(valor)
alert("ao mes vc resebeu"+result)

/*
3 - Faça um algoritmo que efetua a apresentação do valor da conversão em 
real (R$) de um valor lido em dólar (US$). o algoritmo deverá solicitar
 o valor da cotação do dólar.
*/
alert ("execicio 3");
let real ,dolar,cotacion;
real=prompt("escreva o valor em reais");
dolar=prompt("escreva o valor do dolar no brasil");
cotacion=parseFloat(real)/parseFloat(dolar);
alert("o valor dos reais é :"+cotacion);
/**4 - Escrever um algoritmo que receba um número 
 * e mostre uma mensagem caso este número seja maior que 80, menor que 25 ou igual a 40
 */

alert("exercicio 4");
let num;
num=prompt("escreva um numero");

if(parseInt(num)>80){
    alert("o numero e maior que 80");
}else if(parseInt(num)<25){
    alert("o numero e menor que 25");
}else if(parseInt(num)==40){
    alert("o numero e = 40 ");
}else{
    alert("o numero È "+num);
}
