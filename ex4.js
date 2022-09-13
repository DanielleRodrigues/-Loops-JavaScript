/* ATIVIDADE 4
Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região. 
Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), 
e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva). 
Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (WHILE)
o número de pessoas calmas; 
o número de mulheres nervosas; 
o número de homens agressivos; 
o número de outros calmos;
o número de pessoas nervosas com mais de 40 anos; 
o número de pessoas calmas com menos de 18 anos. */
 

let i = 0,  idade, sexo, emocao, mulherEstressada, pessoaCalma, outroCalmos

while ( i < 150)
{
  
    idade = Number ( prompt ('Insira a idade:  '));
    idade = Number ( prompt ('Insira o sexo:  1-fem 2masc 3outros '));
    idade = Number ( prompt ('Insira o emoção: 1-calma  2- estressada  3-agressiva'));
    

    if (emocao === 1){
        pessoaCalma++
        if (emocao===1 && sexo===3){
            outroCalmos++
        }

    }

    if (sexo ===1 && emocao ===2){
        mulherEstressada++

    }
}