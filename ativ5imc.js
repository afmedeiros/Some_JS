peso=Number(prompt('Digite seu peso: '))
altura=Number(prompt('Digite sua altura: '))

let calculoImc
calculoImc=peso/(altura*altura)

if(calculoImc<18){

alert('Você está abaixo do peso!')

}if(calculoImc>18 && calculoImc<25){

alert('Você está na faixa de peso ideal!')

}else if(calculoImc>25){

alert('Você está acima do peso!')

}