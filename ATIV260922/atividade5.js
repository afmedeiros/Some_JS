//Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 
//25 estão ocupados pelas próximas semanas. Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o 
//número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois 
//ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não 
//aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).

let totalGeralLeitos = 130, capacidade = 130/2, ocupados = 25
let totalLeitosLivres = totalGeralLeitos - capacidade - ocupados
let numPessoas

while (totalLeitosLivres >= 0){

    numPessoas = Number(prompt("Quantas pessoas entram ou saem"))

    if(numPessoas > 0){

        totalLeitosLivres = totalLeitosLivres - numPessoas

    }
    
    if(numPessoas < 0){

        totalLeitosLivres = totalLeitosLivres - numPessoas

    }
    
    }

    alert(`Não é possível pois ultrapassa a capacidade em ${totalLeitosLivres*(-1)} leitos!`)