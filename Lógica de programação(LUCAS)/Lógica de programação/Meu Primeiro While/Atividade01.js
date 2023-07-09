// Criar um programa que simule um jogo de adivinhação. Deve-se criar uma variavel com um numero secreto
// e perguntar pro usuario ate que ele acerte esse numero. Acertando mostrar mensagem de "acertou miseravel" 
// e quantos palpites foram utilizados para acertar.

let numero = 10
let tentativas = 0
let numeroPalpite

    alert(`>>>>>TENTE ADIVINHAR O NÚMERO!<<<<<`)

    while(numero != numeroPalpite){

        numeroPalpite = Number(prompt("Digite o numero: "))

        tentativas++

       
      
    }
    
        alert(`Acertou miseraveeeeelllll!!!!! Foram ${tentativas} tentativas.`)