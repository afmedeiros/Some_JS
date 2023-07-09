//O Amazon Prime Video, possui um sistema de pesquisa no seu catálogo que armazena as últimas buscas do usuário. Esse sistema armazena em 
//um histórico de pesquisa somente as séries e filmes que existem no catálogo, ou seja, que foram encontradas na busca. Criar um programa 
//que contenha a seguinte lista de séries: House, The Boys, Clarice, Periféricos, Pearson, Reacher, Undone, Bosch, Hunters e Lore. Solicitar 
//ao usuário que pesquise 5 séries e a cada pesquisa mostrar mensagem "Série encontrada!" ou "Série não encontrada!". Após a pesquisa, 
//mostrar o histórico somente com as séries encontradas. Caso nenhuma tenha sido encontrada, mostrar mensagem "Seu histórico de pesquisa 
//está vazio!"

// Critérios de avaliação:

// (1,0) Criar a lista com as 10 séries. - OK
// (1,0) Receber as séries pesquisadas pelo usuário e mostrar as mensagens. - OK
// (1,0) Armazenar as séries encontradas em um histórico. - OK
// (1,0) Mostrar histórico com as séries ou a mensagem de histórico vazio. - OK

let listaSeries = ['house', 'the boys', 'clarice', 'periféricos', 'pearson', 'reacher', 'undone', 'bosch', 'hunters', 'lore'] 
let listaEncontradas = []
let addSeries
let controle = 0

alert('Bem vindo ao jogo de séries da Amazon Prime Video')

for(i=0;i<10;i++){

    addSeries = prompt('Digite a série que deseja procurar').toLowerCase()
    if(listaSeries.includes(addSeries)==true){
        listaEncontradas.push(addSeries)
        controle++
        alert('Série encontrada!')
    }else{
        alert('Série não encontrada')
    }
}

if(controle>0)
{

alert(`Foram encontradas as seguintes séries ${listaEncontradas}`)

}else{

alert('Seu histórico de pesquisa está vazio!')

}

