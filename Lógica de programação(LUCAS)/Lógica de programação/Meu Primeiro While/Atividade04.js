// 4) Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. 
// Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.

let numero, somaNumeros = 0, media, impar

for(pessoas = 0; pessoas < 5; pessoas++){

    numero = Number(prompt("Digite um numero: "))
    somaNumeros += numero

    if(numero % 2 == 1){

            impar = 1
        
    }
    console.log(somaNumeros)
}

media = (somaNumeros / 5).toFixed(2)
    
    if(impar == 1){

        alert("Um ou mais numeros digitados são ímpares!")
    
    }else{

        alert(`A média dos pares são ${media}`)


    }
