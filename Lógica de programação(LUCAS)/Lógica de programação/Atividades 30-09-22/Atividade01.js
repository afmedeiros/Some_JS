// 1) Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. 
// Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência".
// Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".

alert(">>>> DIGITE A SEQUENCIA <<<<")

let sequenciadig

    for(sequencia = 0; sequencia > 0; sequencia --){

        sequenciadig = Number(prompt("Digite um número: "))
        
        if(sequenciadig != sequencia){
            alert("Você digitou a sequencia errada!")
            break
        }
    

    }