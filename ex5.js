/*ATIVIDADE 5
Crie um programa que leia um número do teclado até que encontre um número igual a zero. No final, mostre a soma dos números digitados.(DO...WHILE)*/

const prompt = require ('prompt-sync')();

let num, soma=0


do {
    num = Number ( prompt ('Insira um número')); 
    soma = soma + num

}
while (num != 0)
{ 
}
console.log (`A soma total:${soma}`);