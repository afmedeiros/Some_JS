nome=prompt('Digite o seu nome: ')
idade=Number(prompt('Digite a sua idade: '))
comorbidade=prompt('Tem comorbidade? Escreve S ou N').toUpperCase()
//caso a idade seja maior ou igual a 60 ou tenha comorbidade tem que vacinar
if(idade>=60 || comorbidade == "S" ){

    alert('Pode se vacinar já!')

}if(idade<60 && comorbidade == "N"){

    alert('Não pode se vacinar!')
}