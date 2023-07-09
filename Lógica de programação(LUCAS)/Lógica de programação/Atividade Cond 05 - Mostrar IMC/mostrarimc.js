// 5) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está \n
// abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).

let altura, peso, imc

altura = Number(prompt('Digite sua altura: '))
peso = Number(prompt('Digite seu peso: '))

imc = (peso / (altura * 2)). toFixed (2)

if(imc < 18 ){

        alert(`Abaixo do peso!`)

}else if(imc > 25){

        alert(`Acima do peso!`)

}else

        alert(`Peso ideal!`)
