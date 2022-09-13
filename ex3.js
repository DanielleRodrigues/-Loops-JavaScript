/* ATIVIDADE 3
Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos. Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99. (WHILE)
*/

const prompt = require ('prompt-sync')();
let idade, ctrl50=0 , ctlr21=0;

while (idade != -99){
    idade = Number ( prompt ('Insira a idade:  '));
    if (idade < 21 && idade > 0){
        ctlr21++
    }
    if (idade > 50){
        ctrl50++
    }
}

console.log (`A quantidade de pessoas menores de 21: ${ctlr21}`);
console.log (`A quantidade de pessoas maiores de 50: ${ctrl50}` );


