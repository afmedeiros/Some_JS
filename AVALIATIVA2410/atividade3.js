//A brincadeira "Acerte os legumes" consiste em acertar uma sequência de legumes (batata, beterraba, mandioca, cebola, pepino) geradas 
//aleatoriamente pelo sistema. Criar um sistema no qual são gerados 3 legumes entre os citados acima e armazenados em um vetor. Em seguida 
//peça para o usuário digitar (um de cada vez) quais legumes ele acha que formam a sequência. Caso acerte todos as legumes na ordem correta, 
//mostrar uma mensagem "Parabéns! Você acertou a sequência". Caso erre algum legume, mostrar uma mensagem "Você não acertou todos os legumes". 
//Ao final, dar opção para o jogador jogar novamente ou não, iniciando uma nova rodada caso responda SIM ou finalizando o programa caso 
//responda NÃO.

// Critérios de avaliação:

// (1,0) Gerar 3 legumes aleatórios e armazenar em um vetor. - OK
// (1,0) Receber os legumes digitadas pelo usuário e comparar com os legumes gerados. - OK
// (1,0) Mostrar uma tela com os legumes gerados, os legumes do usuário e o resultado (ganhou ou perdeu). - OK
// (1,0) Dar opção ao jogador de jogar novamente. - OK



let listaLegumes = ['batata', 'beterraba', 'mandioca', 'cebola', 'pepino']

let addRandom 
let listaRandom = []
let listaUsuario = []
let addLegumesUser
let jogaNovamente

for(i=0;i<3;i++){

    addRandom = listaLegumes[Math.floor(Math.random() * listaLegumes.length)];
    listaRandom.push(addRandom)
    }


JogoLegumes()

function JogoLegumes(){



alert('Bem vindo a brincadeira Acerte os Legumes!\nVocê deve acertar uma sequência de 3 legumes geradas aleatoriamente pelo sistema\nLista de legumes: batata, beterraba, mandioca, cebola, pepino')

alert(listaRandom)

for(i=0;i<3;i++){

addLegumesUser = prompt('Digite um legume de cada vez:')
listaUsuario.push(addLegumesUser)

}

if(listaRandom[0] == listaUsuario[0] && listaRandom[1] == listaUsuario[1] && listaRandom[2] == listaUsuario[2]){

    alert(`Sequência correta: ${listaRandom}\nSequência do usuário: ${listaUsuario}\nParabéns! Você acertou a sequência`)
}else{
    alert(`Sequência correta: ${listaRandom}\nSequência do usuário: ${listaUsuario}\nVocê não acertou todos os legumes`)
}

jogaNovamente = prompt('Deseja jogar denovo? Digite sim ou não').toLowerCase()
if(jogaNovamente == 'sim'){
    JogoLegumes()
}else{
    alert("Tchau meu chapaaaaaa")
}
}


