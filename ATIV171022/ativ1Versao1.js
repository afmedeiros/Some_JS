//1) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. 
//(Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).

let numeros = []
let addNumbers

for(i=0; i<5;i++){

    addNumbers = prompt('Digite um número: ')
    numeros.push(addNumbers)

}


    numeros.sort(compareNumbers)

   

    function compareNumbers(a, b)  //usa essa função para ele ordenar elementos além do 10 
    {
        return a - b;
    }

let multX = numeros[4]

//alert(multX)
//alert(numeros)
let soma = 0
numeros.map(Mult) //Map sempre precisa de uma function para dizer o que ela vai fazer

function Mult(num){

    if(num != multX){
        soma += (num*multX)
        
    }
    
}

alert(soma)
