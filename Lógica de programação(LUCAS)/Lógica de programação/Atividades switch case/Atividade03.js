// 3) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. 
// Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, 
// que corresponde a março. Mostrar na tela "O mês possui 31 dias".

let mes

mes = Number(prompt("Digite o mes em numero: "))

    switch(true){

        case mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12:
        alert("O mês possui 31 dias!")
        break

        case mes == 4 || mes == 6 || mes == 9 || mes == 11:
        alert("O mês possui 30 dias!")
        break

        case mes == 2:
        alert("O mês possui 28 dias!")
        break

        default:
        alert("Atenção!! Digite um numero entre 1 á 12 referente ao mes escolhido!")



    }