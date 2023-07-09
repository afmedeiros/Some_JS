//Criar um vetor de 50 posições e preencher totalmente com números aleatórios inteiros entre -100 e 100.
//Ao final, mostre o vetor inteiro e bonitinho na página.
//Para o mesmo vetor anterior, após ele estar completamente bonito e preenchido, substituir por ‘0’ todas as posições que possuem valores 
//negativos.

let vetor = []

for(i=0;i<50;i++){
vetor.push(gerarNumero(-100, 100))


function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
}

alert(`Aqui ainda com os vetores negativos: ${vetor}`)

for(i=0;i<50;i++){
    if(vetor[i]<0){
        vetor[i]=0
    }
}

alert(`Aqui ainda com os valor ZERO no lugar do negativo: ${vetor}`)