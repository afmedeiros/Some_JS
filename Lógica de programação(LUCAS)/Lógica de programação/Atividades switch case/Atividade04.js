// 4) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada:
// 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar 
// o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser 
// realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

let contaBancaria, tipoOperacao, saldo = 1000

contaBancaria = Number(prompt("Digite o numero da sua conta bancaria: "))
tipoOperacao = Number(prompt(">>> Digite a opcao desejada <<< \n\n1) Saldo\n2) Deposito\n3) Saque\n"))

switch(tipoOperacao){

    case 1: 

        alert(`Saldo atual: R$ ${saldo}`)
        break

    case 2:

        deposito = Number(prompt("Valor do deposito: "))
        saldo = saldo + deposito
        alert(`Saldo atual: R$ ${saldo}`)
        break

    case 3:

        saque = Number(prompt("Valor do saque: "))

        if(saque <= saldo){
            saque = saldo - saque
            alert(`Saldo atual: R$ ${saldo}`)

        }else{

            alert(`Saldo Insuficiente!`)
        }
        break
        

}

