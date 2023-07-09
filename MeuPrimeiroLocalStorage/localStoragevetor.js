let nomes = []
let addNome

nomes = JSON.parse(localStorage.getItem('nomesSalvos'))

if(nomes == null)
{

nomes = [] //tem que deixar o vetor nulo se não estiver (se não ele ñ grava)

addNome = prompt('Digite um nome: ')
nomes.push(addNome)
localStorage.setItem('nomesSalvos', JSON.stringify(nomes))
alert('Cadastro efetuado!')
}else{

addNome = prompt('Digite um nome: ')
nomes.push(addNome)
localStorage.setItem('nomesSalvos', JSON.stringify(nomes))
alert('Cadastro efetuado!')

}



