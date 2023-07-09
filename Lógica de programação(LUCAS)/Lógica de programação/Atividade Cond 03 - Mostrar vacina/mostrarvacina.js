// 3) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem \N
// "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

let nome, idade, comorbidade

nome = prompt('Digite seu nome: ')
idade = Number(prompt('Digite sua idade: '))
comorbidade = prompt('Possui comorbidade? ').toLowerCase()

if(idade >= 60){

        alert(`Voce pode se vacinar!`)

}else if(comorbidade == "sim"){

        alert(`Voce pode se vacinar!`)

}else

        alert(`Não pode se vacinar!`)

       

