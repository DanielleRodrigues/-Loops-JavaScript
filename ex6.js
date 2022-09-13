/*ATIVIDADE 6
Escrever um programa que receba vários números inteiros no teclado. 
E no final imprimir a média dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)*/


const prompt = require ('prompt-sync')();

let num, media=0, cont=0, soma=0;

do {

    num = Number ( prompt ('Insira um número:  ')); 
    soma = soma + num;
    if (num%3===0){
        cont++
    }

} while (num !=0 );

   
    media = soma / (cont -1);
 console.log (`A soma de números multiplos de 3 é: ${soma}`);
 console.log (`A média de números multiplos de 3 é: ${media}`);