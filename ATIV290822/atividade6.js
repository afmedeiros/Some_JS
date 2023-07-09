// Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 
// 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo 
// até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda 
// que foi inserida naquele dia e o total acumulado de economia.

let moeda1, moeda5, moeda10, moeda25, moeda50, saldo0, insert, deposito, saldo1

saldo0=0
insert=0


Porquinho()

function Porquinho() {

    deposito=(prompt('Digite qual o valor da moeda que deseja inserir:'))

    switch(deposito){

        case "1":
        saldo0=Number(saldo0+0.01);
        insert++;
        Porquinho()
        break

        case "5":
        saldo0=Number(saldo0+0.05);
        insert++;
        Porquinho()
        break

        case "10":
        saldo0=Number(saldo0+0.10);
        insert++;
        Porquinho()
        break

        case "25":
        saldo0=Number(saldo0+0.25);
        insert++;
        Porquinho()
        break

        case "50":
        saldo0=Number(saldo0+0.50);
        insert++;
        Porquinho()
        break

        case"0":
        alert (`Seu saldo é de R$${saldo0} e quantidade de depósitos foi de ${insert}`)
        break

    }
    
}

