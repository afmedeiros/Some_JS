//5) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem 
//executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor. Voltar para de menu sempre, ao 
//menos quando escolher sair.

// ======== MENU ========
// 1- Cadastrar nome
// 2- Excluir um nome
// 3- Editar um nome
// 4- Pesquisar se um nome está cadastrado
// 5- Listar todos os nomes cadastrados
// 6- Sair do programa

let nomes = []
let op, posicao
let nomeAdiciona, nomePesquisa, nomeEdita, nomeNovo, nomeExclui

do{

op = Number(prompt('======== MENU ========\n 1- Cadastrar nome\n 2- Excluir um nome\n 3- Editar um nome\n 4- Pesquisar se um nome está cadastrado\n 5- Listar todos os nomes cadastrados\n 0- Sair do programa'))

    switch(op){

        case 1: 
        nomeAdiciona = prompt('Nome a cadastrar?    ')
        nomes.push(nomeAdiciona)
        alert('Nome cadastrado!')
        break

        case 2: 
        nomeExclui = prompt('Nome a excluir?  ')
        posicao = nomes.indexOf(nomeExclui)
            if(posicao == -1){
                
                alert('Nome não encontrado!')

            }else{

                nomes.splice(posicao,1)  //metodo splice, coloca a posição e a quantidade de coisas a excluir (nesse caso é 1)
                alert('Nome editado!')

            }
            break


        case 3: 
        nomeEdita = prompt('Nome a editar?  ')
        posicao = nomes.indexOf(nomeEdita)
            if(posicao == -1){
                
                alert('Nome não encontrado!')

            }else{

                nomeNovo = prompt ('Qual o novo nome?')
                nomes[posicao] = nomeNovo
                alert('Nome editado!')

            }
            break


        case 4: 
        nomePesquisa = prompt('Nome a pesquisar?')
            if(nomes.includes(nomePesquisa)==true){

                alert('Nome existe na lista!')

            }else{

                alert('Nome não existe na lista!')

            }
            break

        case 5:

            alert (nomes)
            break

        case 6:

            alert('Você escolheu sair do programa!')
            break

        default:

            alert('Escolha uma opção válida!')
            
    }
}while(op != 6)

