// 2) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar
// a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

let nome, maiorIdadeNome, idade, somaIdade = 0, media, maiorIdade = 0

for(pessoas = 0; pessoas < 5; pessoas++){

    nome = prompt("Digite seu nome: ")
    idade = Number(prompt("Digite sua idade: "))

    somaIdade = idade
    if(idade > maiorIdade){

        maiorIdade += idade
        maiorIdadeNome = nome
    }

}

    media = somaIdade / 5
    alert(`A média de idade é: ${media}\nA pessoa velha do grupo: ${maiorIdadeNome} com ${maiorIdade} anos.`)