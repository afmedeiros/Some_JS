//3) Cria um programa onde o usuário digite 5 números. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares 
//digitados e a soma desses números.

let numeroUm, controle, soma=0
let listaAdd = []


for(i=0;i<5;i++){

    numeroUm=Number(prompt('Digite o valor:    '))
    controle = numeroUm%2 
    
    if(controle!=0){
        soma += numeroUm
        listaAdd.push(numeroUm)
 
    }    
}
alert(`Você digitou os seguintes números impares ${listaAdd} e a soma destes números deu ${soma} `)