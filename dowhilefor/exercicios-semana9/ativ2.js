//Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. 
//(Não é permitido usar o operador exponencial **). (DESAFIO: Condição para expoente 0. Qualquer número elevado a 0 tem como resultado 1).

let numero, expoente, resultado, controle

numero=Number(prompt("Digite um número: "))
expoente=Number(prompt('Digite um expoente: '))

resultado = 1

for(i=0;i<expoente;i++){

    
    resultado = resultado*numero
    

}
alert(`${resultado}`)