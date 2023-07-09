// 6) Desenvolva um programa no qual o usuário deve digitar o nome \n
// e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.

let nome1, nome2, nome3, nome4, nome5
let idade1, idade2, idade3, idade4, idade5
let mediaIdades, maiorNome, maiorIdade = 0

nome1 = prompt('Digite seu nome: ')
idade1 = Number(prompt('Digite sua idade: '))

    if(idade1 > maiorIdade){

        maiorIdade = idade1
    }

nome2 = prompt('Digite seu nome: ')
idade2 = Number(prompt('Digite sua idade: '))

    if(idade2 > maiorIdade){

        maiorIdade = idade2
    }

nome3 = prompt('Digite seu nome: ')
idade3 = Number(prompt('Digite sua idade: '))

    if(idade3 > maiorIdade){

        maiorIdade = idade3
    }

nome4 = prompt('Digite seu nome: ')
idade4 = Number(prompt('Digite sua idade: '))

    if(idade4 > maiorIdade){

        maiorIdade = idade4
    }


nome5 = prompt('Digite seu nome: ')
idade5 = Number(prompt('Digite sua idade: '))

    if(idade1 > maiorIdade){

        maiorIdade = idade1
    }


mediaIdades = ((idade1 + idade2 + idade3 + idade4 + idade5)/5).toFixed(2)

