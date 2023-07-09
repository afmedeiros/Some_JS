// 5) Criar um programa que calcule o IMC, no qual o usuário deve digitar
// o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula. (HTML + JS)

let peso, altura, Imc 

peso = Number(prompt('Digite seu peso: '))
altura = Number(prompt('Digite sua altura: '))

Imc = (peso / (altura * 2)). toFixed (2)

alert (`Seu IMC é ${Imc}`)