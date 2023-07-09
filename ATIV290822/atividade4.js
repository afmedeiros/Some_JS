let operacao, saldo, deposito, salDep, saque, salSaq


prompt('Digite o número da sua conta')
saldo=Number(prompt('Digite o saldo inicial'))
operacao=Number(prompt('Digite a operação a ser realizada:\n1)Saldo\n2)Depósito\n3)Saque'))

switch(operacao){
    case 1:
    alert(`Seu saldo é de R$${saldo},00`)
    break

    case 2:
    deposito = Number(prompt(`Qual valor deseja depositar? `))
    saldo=saldo+deposito
    alert(`Seu saldo agora é de R$${saldo},00`)      
    break
    
    case 3:
        saque=Number(prompt(`Qual valor desejar sacar? Seu saldo é de R$${saldo},00`))
        if(saque>saldo){
            alert('Você não tem saldo suficiente!')
        }else{
            saldo=saldo-saque
            alert(`Seu saldo agora é de R$${saldo},00`)
        }
        break
    
     
}