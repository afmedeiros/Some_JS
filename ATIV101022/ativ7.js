//7) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve 
//mostrar todos os índices que ele se encontra. Caso não exista, mostrar mensagem dizendo que não existe.

//             0 1 2 3 4 5  6  7 8 9
let numeros = [2,4,2,8,7,12,11,9,1,1]
let numPesquisa, ultimaPosicao
let posicoes = []

numPesquisa = Number(prompt("Número a ser pesquisado:   "))

//indexOf é um elemento que pesquisa se um elemento existe no vetor e retorna a posição que ele se encontra, caso não exista ele irá retornar -1
//lastIndexOf é um elemento que retorna a ultima posição que o elemento encontra-se no vetor (por ex. no caso acima o 1 será a posição 9 )
// ultimaPosicao = numeros.lastIndexOf(numPesquisa)
// alert(ultimaPosicao)

for(i=0; i<numeros.length;i++){
    if(numPesquisa == numeros[i]){
        posicoes.push(i)

    }
}

if(posicoes.length == 0){
    alert('Número não existe!')
}else{

    alert(`Posições encontradas - o número pesquisado foi encontrado nas posições ${posicoes}`)
}