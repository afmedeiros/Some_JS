


let diarias, descontos, valorDiarias, voucher, danos

diarias = Number(prompt(`Digite a quantidade de diárias desejadas: `))


    if(diarias > 0 && diarias <= 5){

        valorDiaria = 100

    }else if(diarias >= 6 && diarias <= 10){

        valorDiarias = 90

    }else{

        valorDiarias = 80

    }

danos = 150
soma = diarias * 100
voucher = soma * 0.25
somatotal = soma - voucher + danos

        alert(`O valor das suas ${diarias} diárias, fica um total de R$${somatotal}!`)
