//8.5:

//Criar um vetor de 50 posições e preencher totalmente com números aleatórios inteiros entre -100 e 100.

//Ao final, mostre o vetor inteiro e bonitinho na página.


let vetor = []

for(i=0;i<50;i++){
vetor.push(gerarNumero(-100, 100))


function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
}

alert(vetor)