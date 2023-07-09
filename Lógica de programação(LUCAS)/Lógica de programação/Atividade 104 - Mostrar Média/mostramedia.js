// 4) Criar um programa que realize o cálculo de uma média da faculdade.
// A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1), Projeto final (peso 3). /n
// O usuário deve digitar as três notas e a média deve ser mostrada na tela. (HTML + JS)

let peso1, peso2, peso3, media

peso1 = Number(prompt('Atividade individual: '))
peso2 = Number(prompt('Seminário em equipe: '))
peso3 = Number(prompt('Projeto final: '))

media = ((peso1 + peso2 + peso3) / 3). toFixed (2)

alert (`Media Final ${media}`)