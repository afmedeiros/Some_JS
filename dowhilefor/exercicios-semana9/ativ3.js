//Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. 
//(Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).

let numero, resultado, controle

numero=Number(prompt("Digite um número: "))

resultado = numero
controle = numero

for(i=0;i<controle;i++){

    
    numero--
    resultado = resultado*numero
    
    
    
    

}
alert(`${resultado}`)