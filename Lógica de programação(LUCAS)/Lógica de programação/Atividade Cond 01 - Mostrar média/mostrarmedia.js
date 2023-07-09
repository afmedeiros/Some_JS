// 1) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual\m
// ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média.\n
// (DESAFIO: Criar uma terceira condição para recuperação. Exemplo: Menor que 5 reprovado, entre 5 e 7 recuperação, maior ou igual aprovado).

let nota1, nota2, nota3, media

nota1 = Number(prompt('Digite a nota: '))
nota2 = Number(prompt('Digite a nota: '))
nota3 = Number(prompt('Digite a nota: '))

media = ((nota1 + nota2 + nota3)/3).toFixed(2)

if(media >= 7 ){

        alert(`Aprovado! Sua média é ${media}`)

}else if(media < 5 ){

        alert(`Reprovado! Sua média é ${media}`)

}else

        alert(`Recuperação! Sua média é ${media}`)