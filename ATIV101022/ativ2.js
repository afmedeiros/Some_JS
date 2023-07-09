//2) Desenvolva um programa que o usuário digite 10 números, ao final mostre o valor que resultado do somatório da primeira metade dos 
//números menos o somatório da segunda metade.

let resultado, numeroUm
let metadeAdd = 0
let metadeSub = 0
let listaAdd = []
let listaSub = []

for(i=0;i<10;i++){

    if(i<5){

        numeroUm=Number(prompt('Digite o valor:    '))
        metadeAdd+=numeroUm
        listaAdd.push(numeroUm)

    

    }else{

        numeroDois=Number(prompt('Digite o valor2: '))
        metadeSub+=numeroDois
        listaSub.push(numeroDois)
    
}
}
resultado = (metadeAdd - metadeSub)
alert(`Você somou esses números ${listaAdd} e subtraiu por esses ${listaSub} e o resultado é ${resultado}`)